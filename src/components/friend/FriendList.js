import React, { useState, useEffect } from "react";
import { FriendCard } from "./FriendCard";
// may need deleteFriend getAllFriends getFriendById from the friends data manager

export const FriendList = () => {
    return (
        <section>
            <h1>Friends</h1>
            <input type="text" placeholder="Search.."></input>
            <FriendCard />
            <FriendCard />
            <FriendCard />
        </section>
    )
}