import React from 'react';
import TicketStatCard from '../cards/TicketStatCard';
import { ticketStatsData } from '../data/ticketsData';

const TicketStats = () => {
  return (
    <div className="stats-grid">
      {ticketStatsData.map((stat, idx) => (
        <TicketStatCard key={idx} {...stat} />
      ))}
    </div>
  );
};

export default TicketStats;
