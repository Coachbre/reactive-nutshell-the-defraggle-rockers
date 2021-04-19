import React, { useState, useEffect } from "react";
import "./EventCard.css";
import { Link } from "react-router-dom";
import { showWeather } from "../../modules/EventManager";

export const EventCard = ({ event, handleDeleteEvent }) => {

    const [weather, setWeather] = useState({})
    const [displayWeather, setDisplayedWeather] = useState(false)

    const handleShowWeather = id => {
        showWeather()
            .then(response => {
                setWeather(response)
                setDisplayedWeather(true)
            })
    }

    if (displayWeather === false) {
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
                            <button type="button" onClick={() => handleShowWeather(event.id)}>Show Weather</button>
                            <Link to={`/events/${event.id}/edit`}>
                                <button type="button">edit</button>
                            </Link>
                            <button type="button" onClick={() => handleDeleteEvent(event.id)}>Remove Event</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
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
                            <button type="button" onClick={() => handleShowWeather(event.id)}>Show Weather</button>
                            <div>
                                <p>
                                    Temp: {weather.list[0].main.temp}°F
                                </p>
                                <p>
                                    Humidity: {weather.list[0].main.humidity}
                                </p>
                                <p>
                                    Description: {weather.list[0].weather[0].description}
                                </p>
                                <p>
                                    Wind Speed: {weather.list[0].wind.speed}mph
                                </p>
                            </div>
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
}