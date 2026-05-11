import React from 'react';

const EventCard = ({ title, date, location, status }) => {
  const statusColors = {
    Live: 'var(--color-secondary)',
    Upcoming: 'var(--color-primary)',
    Planning: 'var(--text-muted)'
  };

  return (
    <div className="card-base event-card animate-fade">
      <div className="event-image">
        <span style={{ fontWeight: '900', fontSize: '64px', opacity: 0.2 }}>{title.charAt(0)}</span>
        <div style={{ 
          position: 'absolute', 
          top: '16px', 
          right: '16px', 
          padding: '6px 14px', 
          borderRadius: 'var(--radius-full)', 
          fontSize: '10px', 
          fontWeight: '900', 
          color: 'white', 
          backgroundColor: statusColors[status],
          textTransform: 'uppercase',
          letterSpacing: '1px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
        }}>
          {status}
        </div>
      </div>
      <div className="event-content">
        <h3 style={{ fontSize: '18px', fontWeight: '800', margin: '0 0 16px 0', color: 'var(--text-main)' }}>{title}</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--text-muted)' }}>
            <span>📅</span>
            <span>{date}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--text-muted)' }}>
            <span>📍</span>
            <span>{location}</span>
          </div>
        </div>
        <button className="btn-primary" style={{ marginTop: '24px', width: '100%' }}>
          View Details
        </button>
      </div>
    </div>
  );
};

export default EventCard;
