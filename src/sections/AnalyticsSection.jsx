import React from 'react';

const AnalyticsSection = () => {
  return (
    <div className="analytics-section animate-fade">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-lg)' }}>
        <h2 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-main)', letterSpacing: '-0.5px' }}>Visitor Insights</h2>
        <button className="btn-ghost">Details</button>
      </div>
      
      <div className="glass-card" style={{ height: 'calc(100% - 48px)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '20px 0', minHeight: '220px', gap: '10px' }}>
          {[60, 85, 45, 95, 75, 60, 90, 80].map((h, i) => (
            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <div 
                style={{ 
                  width: '100%',
                  height: `${h}%`, 
                  background: 'linear-gradient(to top, var(--color-primary), var(--color-secondary))', 
                  borderRadius: 'var(--radius-full)',
                  transition: 'var(--transition-slow)',
                  boxShadow: '0 4px 10px rgba(31, 101, 147, 0.2)'
                }}
              ></div>
              <span style={{ fontSize: '10px', color: 'var(--text-muted)', fontWeight: '700' }}>{['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M'][i]}</span>
            </div>
          ))}
        </div>
        
        <div style={{ 
          marginTop: '24px', 
          padding: '16px', 
          backgroundColor: 'rgba(31, 101, 147, 0.05)', 
          borderRadius: 'var(--radius-md)', 
          borderLeft: '4px solid var(--color-primary)',
          display: 'flex',
          gap: '12px',
          alignItems: 'flex-start'
        }}>
          <span style={{ fontSize: '18px' }}>✨</span>
          <p style={{ fontSize: '13px', color: 'var(--color-primary)', margin: 0, lineHeight: '1.5', fontWeight: '500' }}>
            <strong>AI Recommendation:</strong> Visitor traffic is trending 15% higher than last week. Consider opening additional entry gates at the Waterfront.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSection;
