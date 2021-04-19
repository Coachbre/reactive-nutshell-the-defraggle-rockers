import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";

import { TaskEntry } from "./task/TaskEntry";
import { TaskEdit } from "./task/TaskEdit";
import { TaskList } from "./task/TaskList";
import { FriendList } from "./friend/FriendList"
import { ArticleList } from "./news/NewsArticleList";
import { ArticleEditForm } from "./news/NewsArticleEditForm";
import { NewArticleForm } from "./news/NewsArticleForm";
import { MessageList } from "./messages/MessageList";
import { FriendForm } from "./friend/AddFriendForm"
import { EventList } from "./events/EventList";
import { NewEventForm } from "./events/EventForm";
import { EventEditForm } from "./events/EditEventForm";


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

      <Route exact path="/friends">
        <FriendList />
      </Route>

      <Route exact path="/friends/add">
        <FriendForm />
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

      <Route exact path="/tasks/edit/:taskId(\d+)">
        {/*looks for matching url (from task card) and digit, and sets as the 'taskId' */}
        <TaskEdit />
      </Route>

      <Route exact path="/events">
        <EventList />
      </Route>

      <Route exact path="/events/create">
        <NewEventForm />
      </Route>

      <Route exact path="/events/:eventId(\d+)/edit">
        <EventEditForm />
      </Route>
    </>
  )
}
