import React from 'react';

const HeroBanner = () => {
  return (
    <section className="animate-gradient animate-fade" style={{ 
      background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
      borderRadius: 'var(--radius-lg)',
      padding: '48px',
      color: 'white',
      marginBottom: 'var(--spacing-xl)',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-premium)'
    }}>
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '16px', letterSpacing: '-0.5px' }}>
          Welcome to Jeddah Season 2026
        </h1>
        <p style={{ fontSize: '16px', opacity: 0.9, lineHeight: '1.6', marginBottom: '32px' }}>
          Monitor real-time performance, manage festival venues, and analyze visitor trends across the city's premier entertainment destination.
        </p>
        <div style={{ display: 'flex', gap: '40px' }}>
          <div>
            <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.8, marginBottom: '4px' }}>Live Venues</p>
            <p style={{ fontSize: '28px', fontWeight: '800' }}>14</p>
          </div>
          <div>
            <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.8, marginBottom: '4px' }}>Total Visitors Today</p>
            <p style={{ fontSize: '28px', fontWeight: '800' }}>52.4k</p>
          </div>
        </div>
      </div>

      {/* Decorative Blobs */}
      <div style={{ 
        position: 'absolute', right: '-40px', top: '-40px', width: '300px', height: '300px', 
        borderRadius: '50%', background: 'var(--color-accent)', opacity: 0.15, filter: 'blur(60px)' 
      }}></div>
      <div style={{ 
        position: 'absolute', right: '100px', bottom: '-20px', width: '200px', height: '200px', 
        borderRadius: '50%', background: 'var(--color-highlight)', opacity: 0.2, filter: 'blur(50px)' 
      }}></div>
    </section>
  );
};

export default HeroBanner;
