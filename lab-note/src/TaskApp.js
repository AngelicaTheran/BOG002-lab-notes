import React from "react";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import store from "./store/store";

export const TaskApp = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
