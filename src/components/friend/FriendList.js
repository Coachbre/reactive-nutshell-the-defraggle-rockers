import React, { useState, useEffect } from "react";
import { FriendCard } from "./FriendCard";
import { getAllFriends, deleteFriend } from "../../modules/FriendsManager"
import { useHistory } from "react-router-dom"
// may need deleteFriend getAllFriends getFriendById from the friends data manager

export const FriendList = () => {

    const history = useHistory()

    const [friends, setFriends] = useState([]);

    const getFriends = () => {
        const loggedInUserId = sessionStorage.getItem("nutshell_user")

        return getAllFriends(loggedInUserId).then(friendsFromAPI => {
            setFriends(friendsFromAPI)
        });
    };

    const handleDeleteFriend = (id) => {
        deleteFriend(id)
            .then(() => getAllFriends().then(setFriends));
    };

    useEffect(() => {
        getFriends();
    }, []);

    return (
        <>
            <h1>Friends</h1>
            <section className="friend-content">
                <button type="button"
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
        </>
    )
}