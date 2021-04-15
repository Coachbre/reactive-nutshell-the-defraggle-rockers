import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import './EventForm.css';
import { addEvent } from '../../modules/EventManager';
import { Link } from "react-router-dom";

export const NewEventForm = () => {

    const [events, setEvent] = useState({
        name: "",
        date: "",
        location: ""
    });
    const [isLoading, setIsLoading] = useState(false)

    let history = useHistory();

    const handleControlledInputChange = (event) => {

        const newEvent = { ...events }
        let selectedVal = event.target.value

        if(event.target.value.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }

        newEvent[event.target.id] = selectedVal

        setEvent(newEvent)
    }

    const handleClickSaveEvent = (event) => {
        event.preventDefault()
        const newEventObj = {
            name: events.name,
            date: events.date,
            location: events.location,
            userId: parseInt(sessionStorage.getItem("nutshell_user"))
        }

        addEvent(newEventObj)
            .then(() => history.push("/events"))
    }

    return (
        <form className="eventsForm">
            <h2 className="eventsForm_title">New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Event Name:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Event name" value={events.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Event Date:</label>
                    <input type="text" id="date" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Event date" value={events.date} />
                </div>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Event Location</label>
                        <input type="text" id="date" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Event location" value={events.location} />
                    </div>
                </fieldset>
            </fieldset>
        </form>
    )
}