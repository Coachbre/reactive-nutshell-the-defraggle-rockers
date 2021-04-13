const remoteURL = "http://localhost:8088"

export const getAllFriends = () => {
    return fethch (`${remoteURL}/friendships`)
    .then(res => res.json());
}

export const getFriendById = (friendshipId) => {
    return fethch (`${remoteURL}/friendships/${userId}`)
    .then(res => res.json());
}