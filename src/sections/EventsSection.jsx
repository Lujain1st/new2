import React from 'react';
import EventCard from '../cards/EventCard';
import { eventsData } from '../data/mockData';

const EventsSection = () => {
  return (
    <div className="events-section">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-main)' }}>Featured Events</h2>
        <button style={{ fontSize: '14px', fontWeight: '700', color: 'var(--color-primary)' }}>View All Events</button>
      </div>
      <div className="events-grid">
        {eventsData.map((event, idx) => (
          <EventCard key={idx} {...event} />
        ))}
      </div>
    </div>
  );
};

export default EventsSection;
