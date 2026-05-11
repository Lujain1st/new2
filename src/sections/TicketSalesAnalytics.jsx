import React from 'react';
import { salesAnalytics } from '../data/ticketsData';

const TicketSalesAnalytics = () => {
  const maxSales = Math.max(...salesAnalytics.map(s => s.sales));

  return (
    <div className="analytics-section animate-fade" style={{ marginBottom: 'var(--spacing-xl)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-lg)' }}>
        <h2 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-main)' }}>Sales Analytics</h2>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button className="btn-ghost" style={{ fontSize: '13px' }}>Daily</button>
          <button className="btn-ghost" style={{ fontSize: '13px', backgroundColor: '#f1f5f9' }}>Weekly</button>
        </div>
      </div>

      <div className="glass-card" style={{ padding: 'var(--spacing-xl)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', minHeight: '240px', gap: '12px' }}>
          {salesAnalytics.map((item, idx) => (
            <div key={idx} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
              <div 
                style={{ 
                  width: '100%', 
                  height: `${(item.sales / maxSales) * 100}%`, 
                  background: 'linear-gradient(to top, var(--color-primary), var(--color-secondary))', 
                  borderRadius: 'var(--radius-full)',
                  transition: 'var(--transition-slow)',
                  minHeight: '4px',
                  boxShadow: '0 4px 10px rgba(31, 101, 147, 0.15)'
                }} 
              />
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--text-muted)' }}>{item.day}</span>
            </div>
          ))}
        </div>
        
        <div style={{ 
          marginTop: '32px', 
          display: 'flex', 
          justifyContent: 'space-around', 
          padding: '20px', 
          backgroundColor: '#f8fafc', 
          borderRadius: 'var(--radius-md)' 
        }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: '0 0 4px 0' }}>Avg. Tickets/Day</p>
            <p style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text-main)', margin: 0 }}>1,840</p>
          </div>
          <div style={{ borderLeft: '1px solid #e2e8f0' }}></div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: '0 0 4px 0' }}>Revenue Trend</p>
            <p style={{ fontSize: '18px', fontWeight: '800', color: 'var(--color-secondary)', margin: 0 }}>+12.4%</p>
          </div>
          <div style={{ borderLeft: '1px solid #e2e8f0' }}></div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: '0 0 4px 0' }}>Capacity Filled</p>
            <p style={{ fontSize: '18px', fontWeight: '800', color: 'var(--color-primary)', margin: 0 }}>84%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketSalesAnalytics;
