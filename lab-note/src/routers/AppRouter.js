import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch, 
  Redirect,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { firebase } from "../firebase/firebaseConfig";
import AuthRouter from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";
import TaskScreen from "../components/task/TaskScreen";
import { login } from "../actions/auth";
import { PublicRoute } from "./PublicRoute";
import { startLoadingNotes } from "../actions/notes";


const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));        
        setIsLoggedIn(true);
         
         dispatch(startLoadingNotes(user.uid));

      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return <h1>wait...</h1>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute isAuthenticated={isLoggedIn} path="/auth" component={AuthRouter} />

          <PrivateRoute exact isAuthenticated={isLoggedIn} path="/" component={TaskScreen} />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
      
    </Router>
  );
};

export default AppRouter;
