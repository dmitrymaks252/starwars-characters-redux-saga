import { Route, Switch } from "react-router-dom";
import App from "../pages/App";
import Details from "../pages/Details";
import React from "react";


export const MAIN_ROUTE = "MAIN_ROUTE";
export const PEOPLE_DETAILS_ROUTE = "PEOPLE_DETAILS_ROUTE";

export const routes = [
  {
    id: MAIN_ROUTE,
    path: "/starwars-characters-redux-saga",
    exact: true,
    component: App
  },
  {
    id: PEOPLE_DETAILS_ROUTE,
    path: "/people/:id",
    exact: true,
    component: Details
  }
];

export const getRoutesConfig = (id) => {
  const route = routes.find(r => r.id === id);
  if (route) {
    const {component, ...rest} = route;
    return rest;
  }
};

export default function Routes() {
  return (
    <Switch>
      {routes.map(r => {
        const {id, ...props} = r;
        return (
          <Route key={id} {...props}/>
        );
      })}
    </Switch>
  );
}