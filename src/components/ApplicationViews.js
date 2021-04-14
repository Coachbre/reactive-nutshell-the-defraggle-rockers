import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { TaskList } from "./task/TaskList";



import { FriendList } from "./friend/FriendList"
import { ArticleList } from "./news/NewsArticleList";
import { ArticleEditForm } from "./news/NewsArticleEditForm";
import { NewArticleForm } from "./news/NewsArticleForm";
import { MessageList } from "./messages/MessageList";

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

      <Route exact path="/">
        <h2>News Articles</h2>
        <article className="articles">
          <ArticleList />
        </article>
      </Route>

      <Route exact path="/create">
        <NewArticleForm />
      </Route>

      <Route exact path="/:articleId(\d+)edit">
        <ArticleEditForm />
      </Route>

      <Route path="/friends">
        <FriendList />
      </Route>

      <Route path="/messages">
        <MessageList />
      </Route>

      <Route path="/tasks">
        <h1>Tasks</h1>
        <TaskList />
      </Route>

      <Route exact path="/taskForm">
        {/* task form goes here*/}
      </Route>

      <Route path="/events">
        {/* Render the component for the user's events */}
      </Route>
    </>
  )
}
