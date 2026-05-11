import React from 'react';

const TicketCategoryCard = ({ type, price, availability, sales, color }) => {
  return (
    <div className="card-base animate-fade" style={{ padding: 'var(--spacing-lg)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--spacing-lg)' }}>
        <div>
          <span style={{ 
            fontSize: '10px', 
            fontWeight: '900', 
            textTransform: 'uppercase', 
            letterSpacing: '1px', 
            color: color,
            backgroundColor: `${color}15`,
            padding: '4px 8px',
            borderRadius: 'var(--radius-sm)',
            marginBottom: '8px',
            display: 'inline-block'
          }}>
            {type}
          </span>
          <h3 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text-main)', margin: 0 }}>{price}</h3>
        </div>
        <div style={{ 
          width: '12px', 
          height: '12px', 
          borderRadius: '50%', 
          backgroundColor: sales === 100 ? 'var(--color-highlight)' : 'var(--color-accent)',
          boxShadow: `0 0 10px ${sales === 100 ? 'var(--color-highlight)' : 'var(--color-accent)'}80`
        }} />
      </div>

      <div style={{ marginBottom: 'var(--spacing-md)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: '700', marginBottom: '8px' }}>
          <span style={{ color: 'var(--text-muted)' }}>Sales Progress</span>
          <span style={{ color: 'var(--text-main)' }}>{sales}%</span>
        </div>
        <div style={{ height: '6px', backgroundColor: '#f1f5f9', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
          <div style={{ 
            width: `${sales}%`, 
            height: '100%', 
            backgroundColor: color, 
            borderRadius: 'var(--radius-full)',
            transition: 'var(--transition-slow)'
          }} />
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: '600' }}>{availability}</span>
        <button className="btn-ghost" style={{ fontSize: '12px' }}>Edit Tier</button>
      </div>
    </div>
  );
};

export default TicketCategoryCard;
