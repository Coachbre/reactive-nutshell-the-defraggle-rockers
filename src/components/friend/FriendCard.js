import React from "react";
import "./Friend.css";
import { Link } from "react-router-dom";

export const FriendCard = ({friend, handleDeleteFriend}) => {
    return (
        <section className="friend-card">
            <img  src={require("./friend.jpg")} alt="friend_image"/>
            <h4>{friend.user.name}</h4>
            <button type="button" onClick={() => handleDeleteFriend(friend.id)}>Delete</button>
        </section>
    )
}