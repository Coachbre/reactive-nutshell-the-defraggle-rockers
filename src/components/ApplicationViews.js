import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";

import { TaskEntry } from "./task/TaskEntry"
import { TaskList } from "./task/TaskList";



import { FriendList } from "./friend/FriendList"
import { ArticleList } from "./news/NewsArticleList";
import { ArticleEditForm } from "./news/NewsArticleEditForm";
import { NewArticleForm } from "./news/NewsArticleForm";
import { MessageList } from "./messages/MessageList";
import { EventList } from "./events/EventList";
import { NewEventForm } from "./events/EventForm"


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
          <ArticleList />
      </Route>

      <Route exact path="/create">
        <NewArticleForm />
      </Route>

      <Route exact path="/articles/:articleId(\d+)/edit">
        <ArticleEditForm />
      </Route>

      <Route path="/friends">
        <FriendList />
      </Route>

      <Route path="/messages">
        <MessageList />
      </Route>

      <Route exact path="/tasks">
        <TaskList />
      </Route>

      <Route exact path="/tasks/entry">
        <TaskEntry />
      </Route>

      <Route exact path="/events">
        <EventList />
      </Route>

      <Route exact path="/events/create">
        <NewEventForm />
      </Route>
    </>
  )
}
