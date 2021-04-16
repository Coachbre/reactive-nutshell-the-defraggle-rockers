const remoteURL = "http://localhost:8088"

export const getAllEvents = () => {
    return fetch(`${remoteURL}/events`)
        .then(result => result.json())
}

export const addEvent = (newEvent) => {
    return fetch(`${remoteURL}/events`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEvent)
    }).then(response => response.json())
}

export const getEventById = (id) => {
    return fetch(`${remoteURL}/events/${id}`)
        .then(res => res.json())
}

export const updateEvent = (editedEvent) => {
    return fetch(`${remoteURL}/events/${editedEvent.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedEvent)
    }).then(data => data.json())
}

