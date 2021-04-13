const remoteURL = "http://localhost:8088"

  // export const getAnimalById = (id) => {
  //   //be sure your animals have good data and related to a location and customer
  //  return fetch(`${remoteURL}/animals/${id}?_expand=location&_expand=customer`)
  //   .then(res => res.json())
  // }

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