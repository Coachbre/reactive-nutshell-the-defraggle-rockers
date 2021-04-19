import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { EventCard } from "./EventCard";
import { getAllEvents, deleteEvent } from "../../modules/EventManager";
import "./EventList.css";

export const EventList = () => {

    const [events, setEvents] = useState([]);

    let history = useHistory();

    const getEvents = () => {
        return getAllEvents()
            .then(eventsFromAPI => {
                setEvents(eventsFromAPI)
            });
    };

    const handleDeleteEvent = id => {
        deleteEvent(id)
            .then(() => getAllEvents()
                .then(setEvents))
    }

    useEffect(() => {
        getEvents()
    }, []);

    return (
        <>
            <div className="container-cards">
                <h2>Upcoming Events</h2>
                <article className="events">
                </article>
                <section className="section-content">
                    <button type="button"
                        className="btn btn-primary"
                        onClick={() => { history.push("/events/create") }}>
                        Add New Event
                    </button>
                </section>
                <section className="eventCardList">
                    {events.map(event => <EventCard
                        key={event.id}
                        event={event}
                        handleDeleteEvent={handleDeleteEvent}
                    />
                    )}
                </section>
            </div>
        </>
    )
}