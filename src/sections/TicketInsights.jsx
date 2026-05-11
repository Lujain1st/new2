import React from 'react';
import { ticketInsights } from '../data/ticketsData';

const TicketInsights = () => {
  return (
    <div className="ticket-insights-section">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-lg)' }}>
        <h2 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-main)' }}>AI Ticket Insights</h2>
        <button className="btn-ghost">Refresh</button>
      </div>
      <div className="glass-card" style={{ padding: 'var(--spacing-lg)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {ticketInsights.map((insight, idx) => (
            <div key={idx} style={{ 
              padding: '20px', 
              backgroundColor: 'rgba(31, 101, 147, 0.05)', 
              borderRadius: 'var(--radius-md)',
              borderLeft: `4px solid ${idx % 2 === 0 ? 'var(--color-primary)' : 'var(--color-secondary)'}`,
              transition: 'var(--transition-fast)'
            }} className="hover-lift">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <span style={{ fontSize: '24px' }}>{insight.icon}</span>
                <h4 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text-main)', margin: 0 }}>{insight.title}</h4>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: 0, lineHeight: '1.5', fontWeight: '500' }}>
                {insight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicketInsights;
