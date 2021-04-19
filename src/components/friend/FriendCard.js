import React from "react";
import "./Friend.css";
import img from "./friend.jpg"
import { Link } from "react-router-dom";

export const FriendCard = ({friend, handleDeleteFriend}) => {
    return (
        <section className="friend-card">
            <img src={img} />
            <h4>{friend.user.name}</h4>
            <button type="button" onClick={() => handleDeleteFriend(friend.id)}>Delete</button>
        </section>
    )
}