import React, { useState, useEffect } from "react";
import { updateEvent, getEventById } from "../../modulesEventManager";
import "./EventForm.css";
import { useHistory, useParams, Link } from "react-router-dom"

export const EventEditForm = () => {
    const [events, setEvents] = useState({ name: "", date: "", location: "" });
    const [isLoading, setIsLoading] = useState(false);

    const { eventId } = useParams();
    const history = useHistory();

    const handleExistingEvent = evt => {
        const stateToChange = { ...events };
        stateToChange[evt.target.id] = evt.target.value;
        setEvents(stateToChange);
    };

    const updateExistingEvent = evt => {
        evt.preventDefault()
        setIsLoading(true);

        const editedEvent = {
            id: eventId,
            name: events.name,
            date: events.date,
            location: events.location,
            userId: events.userId
        };

        updateEvent(editedEvent)
            .then(() => history.push("/events")
            )
    };

    useEffect(() => {
        getEventById(eventId)
            .then(event => {
                setEvents(event);
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        
                    </div>
                </fieldset>
            </form>
    )
}