import React from "react";
import "./Friend.css";
import { Link } from "react-router-dom";

export const FriendCard = () => {
    return (
        <section className="friend">
            <img src={require()} alt="smileyface"/>
            <h4>Friend Name</h4>
            <button>Delete</button>
        </section>
    )
}