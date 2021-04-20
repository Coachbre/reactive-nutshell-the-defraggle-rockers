import React, { useState, useEffect } from "react";
import {useHistory} from "react-router-dom"
import { FriendCard } from "./FriendCard";
import { getAllFriends, deleteFriend } from "../../modules/FriendsManager"
import "./Friend.css";

export const FriendList = () => {

    let history = useHistory()

    const [friends, setFriends] = useState([]);

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
            <h1 className="friend-title">Friends</h1>
            <section className="friend-container">
            <section className="friend-content">
                <button className="add-friend-button" type="button"
                    onClick={() => {history.push("/friends/add")}}>
                    add new friend
                    </button>
                {friends.map(friend =>
                    <FriendCard
                        key={friend.id}
                        friend={friend}
                        handleDeleteFriend={handleDeleteFriend} />
                )}
            </section>
            </section>
        </>
    )
}