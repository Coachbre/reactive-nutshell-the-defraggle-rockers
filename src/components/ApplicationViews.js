import React from "react";
import { Route } from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";

export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/Login">
        <Login />
      </Route>
      <Route exact path="/Register">
        <Register />
      </Route>
      <Route exact path="/">
        {/* Render the component for news articles */}
      </Route>
      <Route path="/friends">
        {/* Render the component for list of friends */}
      </Route>
      <Route path="/messages">
        {/* Render the component for the messages */}
      </Route>
      <Route path="/tasks">
        {/* Render the component for the user's tasks */}
      </Route>
      <Route path="/events">
        {/* Render the component for the user's events */}
      </Route>
    </>
  )
}
