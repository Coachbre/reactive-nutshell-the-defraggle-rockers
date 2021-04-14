import React from "react";
import "./Friend.css";
import { Link } from "react-router-dom";

export const FriendCard = ({friend}) => {
    console.log(friend)
    return (
        <section className="friend-card">
            <img alt="friend_image"/>
            <h4>{friend.user.name}</h4>
            <button>Delete</button>
        </section>
    )
}