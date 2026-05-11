import React from 'react';

const TicketsHero = () => {
  return (
    <section className="animate-gradient animate-fade" style={{ 
      background: 'linear-gradient(135deg, var(--color-primary), #1a557a)',
      borderRadius: 'var(--radius-lg)',
      padding: '48px',
      color: 'white',
      marginBottom: 'var(--spacing-xl)',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-premium)'
    }}>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h1 style={{ fontSize: '36px', fontWeight: '900', marginBottom: '16px', letterSpacing: '-1px' }}>
          Tickets Dashboard
        </h1>
        <p style={{ fontSize: '16px', opacity: 0.9, maxWidth: '500px', lineHeight: '1.6' }}>
          Monitor ticket sales, bookings, and attendance across Jeddah Season events with real-time analytics and category management.
        </p>
      </div>

      {/* Decorative Ticket Elements */}
      <div style={{ 
        position: 'absolute', right: '40px', top: '50%', transform: 'translateY(-50%) rotate(15deg)', 
        fontSize: '120px', opacity: 0.1, pointerEvents: 'none' 
      }}>🎫</div>
    </section>
  );
};

export default TicketsHero;
