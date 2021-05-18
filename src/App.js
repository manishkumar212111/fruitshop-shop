import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import "./App.scss";
import Layout from "./components/Layout";


const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <Layout />
      </Router>
    </Provider>
  );
};
export default App;
