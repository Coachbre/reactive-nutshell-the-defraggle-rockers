import React from "react";
import "./EventCard.css";
import { Link } from "react-router-dom";

export const EventCard = ({ event, handleDeleteEvent }) => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="events">
                    <div className="event">
                        <h3><span className="card-eventname">
                            {event.name}
                        </span></h3>
                        <p>Date: {event.date}</p>
                        <p>Location: {event.location}</p>
                        <Link to={`/weather`}>
                            <button type="button">Show Weather</button>
                        </Link>
                        <Link to={`/events/${event.id}/edit`}>
                            <button type="button">edit</button>
                        </Link>
                        <button type="button" onClick={() => handleDeleteEvent(event.id)}>Remove Event</button>
                    </div>
                </div>
            </div>
        </div>

    )
}