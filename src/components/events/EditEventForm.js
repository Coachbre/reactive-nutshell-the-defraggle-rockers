import React, { useState, useEffect } from "react";
import { updateEvent, getEventById } from "../../modules/EventManager";
import "./EventForm.css";
import { useHistory, useParams, Link } from "react-router-dom"

export const EventEditForm = () => {
    const [events, setEvents] = useState({ name: "", date: "", location: "" });
    const [isLoading, setIsLoading] = useState(false);

    const { eventId } = useParams();
    const history = useHistory();

    const handleFieldChange = evt => {
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
                <h2 className="editForm_title">Edit This Event</h2>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="text"
                            requiredclassName="form-control"
                            onChange={handleFieldChange}
                            id="name"
                            value={events.name}
                        />
                        <label htmlFor="name">Name</label>

                        <input 
                            type="date"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="date"
                            value={events.date}
                        />
                        <label htmlFor="date">Date</label>

                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="location"
                            value={events.location}
                        />
                    </div>
                    <div className="alignRight">
                        <Link to={"/events"}>
                            <button>Back</button>
                        </Link>
                    </div>
                    <div className="alignRight">
                        <button
                            type="button" disabled={isLoading}
                            onClick={updateExistingEvent}
                            className="btn btn-primary"
                        >Save Changed</button>
                    </div>
                </fieldset>
            </form>
        </>
    )
}