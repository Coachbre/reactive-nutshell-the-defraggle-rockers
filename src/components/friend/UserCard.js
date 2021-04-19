import React from "react";
import "./Friend.css";
import { Link } from "react-router-dom";

export const UserCard = ({user, handleAddFriend}) => {
    return (
        <section className="user-card">
            <img  src={require("./friend.jpg")} alt="user-image"/>
            <h4>{user.name}</h4>
            <button type="button" onClick={() => handleAddFriend(user.id)}>Add</button>
        </section>
    )
}