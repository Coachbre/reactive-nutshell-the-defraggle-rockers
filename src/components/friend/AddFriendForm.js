import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getAllUsers, addFriend } from "../../modules/FriendsManager";
import { UserCard } from "./UserCard"

export const FriendForm = () => {

    let history = useHistory()

    const loggedInUserId = sessionStorage.getItem("nutshell_user")

    const [users, setUsers] = useState([]);
    const [friend, setFriends] = useState({
        loggedInUserId: loggedInUserId,
        userId: 0
    });

    const [isLoading, setIsLoading] = useState(false);

    const getUsers = () => {
        return getAllUsers().then(usersFromAPI => {
            setUsers(usersFromAPI)
        });
    };

    const handleAddFriend = (id) => {
        const newFriend = {
            loggedInUserId: loggedInUserId,
            userId: parseInt(id)
        } 

        // getUsers().then()

        addFriend(newFriend)
        .then(() => history.push("/friends"))
    }

    useEffect(() => {
        getUsers();
    }, []);
    
    return (
        <section>
            <h1>Add A Friend</h1>
            <form id="form">
                <input placeholder="Search..."></input>
                    <button>Search</button>
            </form>
            {users.map(user => 
                <UserCard
                    key={user.id}
                    user={user}
                    handleAddFriend={handleAddFriend}
                    />)}
        </section>
    )
}

