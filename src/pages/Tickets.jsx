import React from 'react';
import TicketsHero from '../sections/TicketsHero';
import TicketStats from '../sections/TicketStats';
import TicketSalesAnalytics from '../sections/TicketSalesAnalytics';
import TicketCategories from '../sections/TicketCategories';
import TicketInsights from '../sections/TicketInsights';

const Tickets = () => {
  return (
    <div className="tickets-page animate-fade">
      <TicketsHero />
      <TicketStats />
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--spacing-xl)' }}>
        <TicketSalesAnalytics />
        <TicketCategories />
        <TicketInsights />
      </div>
    </div>
  );
};

export default Tickets;
