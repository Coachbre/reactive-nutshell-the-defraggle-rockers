const remoteURL = "http://localhost:8088"

export const getAllFriends = (currentUserId) => {
    return fetch (`${remoteURL}/friends?loggedInUserId=${currentUserId}&_expand=user`)
    .then(res => res.json());
}

export const deleteFriend = (id) => {
    return fetch(`${remoteURL}/friends/${id}`, {
        method: "DELETE"
    }).then(result => result.json())
}

