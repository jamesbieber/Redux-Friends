import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...therest }) => {
  return (
    <Route
      {...therest}
      render={props => {
        if (localStorage.getItem("token")) {
          return <Component {...props} />;
        } else {
          console.log("Not logged in, redirecting...");
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
