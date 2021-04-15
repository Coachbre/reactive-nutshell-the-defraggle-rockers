const remoteURL = "http://localhost:8088"

  export const getAllMessages = () => {
    return fetch(`${remoteURL}/messages`)
    .then(result => result.json())
  }

  export const addMessage = (newMessage) => {
    return fetch(`${remoteURL}/messages`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newMessage)
    }).then(response => response.json())
  }