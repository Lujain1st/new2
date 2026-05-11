import React from 'react';
import TicketCategoryCard from '../cards/TicketCategoryCard';
import { ticketCategories } from '../data/ticketsData';

const TicketCategories = () => {
  return (
    <div className="ticket-categories-section" style={{ marginBottom: 'var(--spacing-xl)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-lg)' }}>
        <h2 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-main)' }}>Ticket Categories</h2>
        <button className="btn-primary" style={{ padding: '8px 16px', fontSize: '13px' }}>+ Add Category</button>
      </div>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
        gap: 'var(--spacing-lg)' 
      }}>
        {ticketCategories.map((category, idx) => (
          <TicketCategoryCard key={idx} {...category} />
        ))}
      </div>
    </div>
  );
};

export default TicketCategories;
