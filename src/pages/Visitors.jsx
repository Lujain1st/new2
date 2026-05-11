import React from 'react';
import StatCard from '../cards/StatCard';
import { visitorStats, visitorDemographics, recentVisitors } from '../data/mockData';

const Visitors = () => {
  return (
    <div className="visitors-page animate-fade">
      <div style={{ marginBottom: 'var(--spacing-xl)' }}>
        <h1 style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text-main)', marginBottom: '8px' }}>Visitor Management</h1>
        <p style={{ color: 'var(--text-muted)' }}>Real-time insights and demographics for Jeddah Season attendees.</p>
      </div>

      <div className="stats-grid">
        {visitorStats.map((stat, idx) => (
          <StatCard key={idx} {...stat} />
        ))}
      </div>

      <div className="sections-grid">
        <div className="demographics-section">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-lg)' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-main)' }}>Age Demographics</h2>
            <button className="btn-ghost">Report</button>
          </div>
          <div className="glass-card" style={{ padding: 'var(--spacing-xl)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {visitorDemographics.map((item, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
                    <span>{item.label}</span>
                    <span style={{ color: item.color }}>{item.value}%</span>
                  </div>
                  <div style={{ height: '8px', backgroundColor: '#f1f5f9', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
                    <div 
                      style={{ 
                        width: `${item.value}%`, 
                        height: '100%', 
                        backgroundColor: item.color,
                        borderRadius: 'var(--radius-full)',
                        transition: 'var(--transition-slow)'
                      }} 
                    />
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid #f1f5f9' }}>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center' }}>
                💡 Data is based on active wristband registrations and ticket scans.
              </p>
            </div>
          </div>
        </div>

        <div className="recent-activity-section">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-lg)' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-main)' }}>Recent Activity</h2>
            <button className="btn-ghost">Live Feed</button>
          </div>
          <div className="card-base" style={{ padding: 'var(--spacing-lg)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {recentVisitors.map((visitor) => (
                <div key={visitor.id} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '12px', borderRadius: 'var(--radius-md)', backgroundColor: '#f8fafc', transition: 'var(--transition-fast)' }}>
                  <div style={{ 
                    width: '40px', 
                    height: '40px', 
                    borderRadius: '50%', 
                    backgroundColor: visitor.type === 'Local' ? 'var(--color-primary)' : 'var(--color-highlight)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '14px'
                  }}>
                    {visitor.name.charAt(0)}
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: '14px', fontWeight: '700', margin: 0, color: 'var(--text-main)' }}>{visitor.name}</p>
                    <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: 0 }}>{visitor.type} • {visitor.gate}</p>
                  </div>
                  <span style={{ fontSize: '11px', fontWeight: '600', color: 'var(--text-light)' }}>{visitor.time}</span>
                </div>
              ))}
            </div>
            <button className="btn-primary" style={{ marginTop: '24px', width: '100%' }}>View All Activity</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visitors;
