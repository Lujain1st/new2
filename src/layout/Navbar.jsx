import React from 'react';

const Navbar = ({ onToggleSidebar }) => {
  return (
    <header className="navbar">
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-lg)' }}>
        <button 
          onClick={onToggleSidebar}
          style={{ 
            fontSize: '24px', 
            color: 'var(--text-muted)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            padding: '8px',
            borderRadius: 'var(--radius-sm)',
            transition: 'var(--transition-fast)'
          }}
          className="btn-ghost"
        >
          ☰
        </button>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }} className="search-container">
          <span style={{ position: 'absolute', left: '16px', color: 'var(--text-light)', fontSize: '18px' }}>🔍</span>
          <input 
            type="text" 
            placeholder="Search events, visitors..." 
            className="search-input"
          />
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xl)' }}>
        <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
          <button className="btn-ghost" style={{ fontSize: '22px' }}>🔔</button>
          <button className="btn-ghost" style={{ fontSize: '22px' }}>💬</button>
        </div>
        <div style={{ 
          fontSize: '13px', 
          fontWeight: '600', 
          color: 'var(--text-muted)',
          backgroundColor: '#f1f5f9',
          padding: '6px 14px',
          borderRadius: 'var(--radius-full)',
          whiteSpace: 'nowrap'
        }} className="date-badge">
          Monday, 11 May 2026
        </div>
      </div>
    </header>
  );
};

export default Navbar;
