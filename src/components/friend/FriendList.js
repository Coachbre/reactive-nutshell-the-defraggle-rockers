import React, { useState, useEffect } from "react";
import {useHistory} from "react-router-dom"
import { FriendCard } from "./FriendCard";
import { getAllFriends, deleteFriend } from "../../modules/FriendsManager"
// may need deleteFriend getAllFriends getFriendById from the friends data manager

export const FriendList = () => {

    const [friends, setFriends] = useState([]);

    let history = useHistory()

    const getFriends = () => {
        const loggedInUserId = sessionStorage.getItem("nutshell_user")
        
        return getAllFriends(loggedInUserId).then(friendsFromAPI => {
            setFriends(friendsFromAPI)
        });
    };

    const handleDeleteFriend = (id) => {
        deleteFriend(id)
        .then(() => getFriends());
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
                        friend={friend}
                        handleDeleteFriend={handleDeleteFriend}  />
                )}
            </section>
        </>
    )
}