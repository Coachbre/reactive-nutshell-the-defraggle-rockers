import React, { useState, useEffect } from "react";
import { FriendCard } from "./FriendCard";
import { getAllFriends } from "../../modules/FriendsManager"
// may need deleteFriend getAllFriends getFriendById from the friends data manager

export const FriendList = () => {

    const [friends, setFriends] = useState([]);

    const getFriends = () => {
        const loggedInUserId = sessionStorage.getItem("nutshell_user")
        
        return getAllFriends(loggedInUserId).then(friendsFromAPI => {
            setFriends(friendsFromAPI)
        });
    };

    useEffect(() => {
        getFriends();
    }, []);

    return (
        <>
            <h1>Friends</h1>
            <section className="friend-list">
                <input type="text" placeholder="Search.."></input>
                {friends.map(friend =>
                    <FriendCard
                        key={friend.id}
                        friend={friend} />
                )}
            </section>
        </>
    )
}