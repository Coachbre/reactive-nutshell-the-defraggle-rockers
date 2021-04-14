import React from "react";
import "./Friend.css";
import { Link } from "react-router-dom";

export const FriendCard = ({ friend }) => {
    return (
        <section className="friend">
            <img alt="smileyface"/>
            <h4>{friend.name}</h4>
            <button>Delete</button>
        </section>
    )
}