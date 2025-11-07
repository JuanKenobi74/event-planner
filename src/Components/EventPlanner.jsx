import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling

const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>
            <section className="description">
                {/* Description content goes here */}
            </section>
            <section className="events_categories">
                {/* Event categories content goes here */}
            </section>
            <section className="features">
                {/* Features content goes here */}
            </section>
            <section className="testimonials">
                {/* Testimonials content goes here */}
            </section>
            <section className="contact">
                {/* Contact content goes here */}
            </section>
        </div>
    );
};

export default EventPlanner;
