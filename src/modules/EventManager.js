import { settings } from "./Settings";

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

export const deleteEvent = (id) => {
    return fetch(`${remoteURL}/events/${id}`, {
        method: "DELETE"
    }).then(result => result.json())
}

export const showWeather = () => {
    return fetch(`api.openweathermap.org/data/2.5/forecast?id=${settings.cityCode}&appid=${settings.weatherKey}`)
        .then(result => result.json())
}

