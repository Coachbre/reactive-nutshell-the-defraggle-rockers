import React, { useState, useEffect } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import { useHistory } from "react-router-dom";
import { getAllUsers, addFriend } from "../../modules/FriendsManager";
import { UserCard } from "./UserCard"

export const FriendForm = () => {

    let history = useHistory()

    const loggedInUserId = sessionStorage.getItem("nutshell_user")
    const [search, setSearch] = useState([])
    const [searchResults, setSearchResults] = useState([])
    const [users, setUsers] = useState([]);
    const [friend, setFriends] = useState({
        loggedInUserId: loggedInUserId,
        userId: 0
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = (event) => {
        event.preventDefault()
        let userInput = event.target.value

        if (userInput.length > 0) {
            console.log(userInput)

                    let searchMatch = users.filter(user => {
                        if (user.name.toLowerCase().includes(userInput.toLowerCase())) {
                            return true
                        }
                       
                    })
                    setSearchResults(searchMatch)
        }
    }


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
                <input placeholder="Search for friends..."
                onChange={handleSearch}
                />
            </form>
            {searchResults.map(user =>
                <UserCard
                    key={user.id}
                    user={user}
                    handleAddFriend={handleAddFriend}

                />)}
        </section>
    )
}

