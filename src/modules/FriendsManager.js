const remoteURL = "http://localhost:8088"

export const getAllFriends = () => {
    return fetch (`${remoteURL}/friends/{friendId}?_expand=user`)
    .then(res => res.json());
}


