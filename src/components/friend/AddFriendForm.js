import React, { useState, useEffect } from "react";
import { getAllFriends, addFriend } from "../../modules/FriendsManager";
import { friendCard } from "./FriendCard";

export const FriendForm = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [friends, setFriends] = useState([]);


    return (
        <section>
            <h1>Add A Friend</h1>
            <form id="form">
                <input placeholder="Search..."></input>
                    <button>Search</button>
            </form>
        </section>
    )
}

