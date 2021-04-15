import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getAllUsers, addFriend } from "../../modules/FriendsManager";
import { UserCard } from "./UserCard"

export const FriendForm = () => {

    let history = useHistory()

    const [users, setUsers] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    const getUsers = () => {
        return getAllUsers().then(usersFromApi => {
            setUsers(usersFromApi)
        });
    };

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
            {}
        </section>
    )
}

