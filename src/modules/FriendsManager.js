const remoteURL = "http://localhost:8088"

export const getAllFriends = (currentUserId) => {
    return fetch (`${remoteURL}/friends?loggedInUserId=${currentUserId}&_expand=user`)
    .then(res => res.json());
}

