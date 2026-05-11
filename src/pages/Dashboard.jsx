import React from 'react';
import StatCard from '../cards/StatCard';
import HeroBanner from '../sections/HeroBanner';
import EventsSection from '../sections/EventsSection';
import AnalyticsSection from '../sections/AnalyticsSection';
import { statsData } from '../data/mockData';

const Dashboard = () => {
  return (
    <div className="dashboard-content">
      <HeroBanner />
      
      <div className="stats-grid">
        {statsData.map((stat, idx) => (
          <StatCard key={idx} {...stat} />
        ))}
      </div>

      <div className="sections-grid">
        <EventsSection />
        <AnalyticsSection />
      </div>
    </div>
  );
};

export default Dashboard;
