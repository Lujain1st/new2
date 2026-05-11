import React from 'react';

const TicketStatCard = ({ title, value, change, icon, color }) => {
  const isPositive = change.startsWith('+');
  
  return (
    <div className="card-base stat-card animate-fade">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-md)' }}>
        <div className="stat-icon-wrapper" style={{ backgroundColor: `${color}10`, color: color }}>
          {icon}
        </div>
        <span style={{ 
          fontSize: '11px', 
          fontWeight: '800', 
          padding: '4px 10px', 
          borderRadius: 'var(--radius-full)', 
          backgroundColor: isPositive ? '#dcfce7' : '#fee2e2', 
          color: isPositive ? '#15803d' : '#b91c1c'
        }}>
          {change}
        </span>
      </div>
      <div>
        <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-muted)', margin: '0 0 4px 0', textTransform: 'uppercase' }}>{title}</p>
        <h2 style={{ fontSize: '28px', fontWeight: '900', margin: 0, color: 'var(--text-main)' }}>{value}</h2>
      </div>
    </div>
  );
};

export default TicketStatCard;
