import React, { useState, useEffect } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import { useHistory } from "react-router-dom";
import { getAllUsers, addFriend } from "../../modules/FriendsManager";
import { UserCard } from "./UserCard"

export const FriendForm = () => {

    let history = useHistory()

    const loggedInUserId = sessionStorage.getItem("nutshell_user")
    const [search, setSearch] = useState([])
    const [searchResults, setSearchResults] = useState("")
    const [users, setUsers] = useState([]);
    const [friend, setFriends] = useState({
        loggedInUserId: loggedInUserId,
        userId: 0
    });

    const [isLoading, setIsLoading] = useState(false);


    const handleSearch = (event) => {
        let userInput = event.target.value
        setSearch(userInput.toLowerCase())
        // getSearchResults(userInput)
    }

    //take in event
    //change getsearchresults on Click for the search button
    //save input to a variable
    //filter through all users and compare to variable
    //return match

    const getSearchResults = (userInput) => { 
        if (userInput.length !== 0) {
            console.log(userInput)
            getAllUsers()
                .then(response => {
                    let searchMatch = response.filter(user => {
                        if (user.name.toLowerCase().includes(userInput)) {
                            return true
                        }
                        setSearchResults(searchMatch)
                    })
                    return searchMatch;
                })
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
                <input placeholder="Search..."
                />
                <button onClick={getSearchResults}>Search</button>
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

