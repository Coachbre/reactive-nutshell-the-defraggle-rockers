import React from "react";
import "./Friend.css";
import { Link } from "react-router-dom";

export const UserCard = () => {
    return (
        <section className="user-card">
            <img  src={require("./friend.jpg")} alt="user-image"/>
            <h4>userName</h4>
            <button type="button">Add</button>
        </section>
    )
}