import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
  
} from "react-router-dom";
import AuthRouter from "./AuthRouter"
import TaskScreen from "../components/task/TaskScreen"

export default function AppRouter(){
  return (
    <Router>
      <div>  
      <Switch>
          <Route path="/auth" component={AuthRouter} />          
          
          <Route exact path="/" component={TaskScreen} />  

          <Redirect to="/auth/login"/>      
          
          
        </Switch>
      </div>
    </Router>
  )
}