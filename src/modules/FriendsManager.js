const remoteURL = "http://localhost:8088"

export const getAllFriends = () => {
    return fetch (`${remoteURL}/friends`)
    .then(res => res.json());
}