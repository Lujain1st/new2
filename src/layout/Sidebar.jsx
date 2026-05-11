import React, { useState } from 'react';
import { navItems } from '../data/mockData';

const Sidebar = ({ isCollapsed, isMobileOpen, onCloseMobile, activePage, setActivePage }) => {

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''} ${isMobileOpen ? 'mobile-open' : ''}`}>
      <div className="sidebar-header" style={{ 
        padding: '0 var(--spacing-lg)', 
        height: 'var(--navbar-height)', 
        display: 'flex', 
        alignItems: 'center',
        borderBottom: '1px solid #f1f5f9'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', overflow: 'hidden' }}>
          <div style={{ 
            minWidth: '40px', 
            height: '40px', 
            backgroundColor: 'var(--color-primary)', 
            borderRadius: 'var(--radius-sm)', 
            color: 'white', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            fontWeight: '900',
            fontSize: '20px'
          }}>J</div>
          {!isCollapsed && (
            <span style={{ 
              fontWeight: '800', 
              fontSize: '18px', 
              color: 'var(--color-primary)', 
              whiteSpace: 'nowrap',
              letterSpacing: '-0.5px'
            }}>Jeddah Season</span>
          )}
        </div>
      </div>

      <nav style={{ flex: 1, padding: 'var(--spacing-lg) var(--spacing-md)' }}>
        {navItems.map((item) => (
          <div 
            key={item.name}
            className={`nav-item ${activePage === item.name ? 'active' : ''}`}
            onClick={() => {
              setActivePage(item.name);
              if (window.innerWidth <= 768) onCloseMobile();
            }}
            style={{ marginBottom: 'var(--spacing-xs)' }}
          >
            <span style={{ fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{item.icon}</span>
            {!isCollapsed && <span style={{ fontSize: '14px', fontWeight: '500' }}>{item.name}</span>}
          </div>
        ))}
      </nav>

      <div style={{ padding: 'var(--spacing-lg)', borderTop: '1px solid #f1f5f9' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            backgroundColor: 'var(--color-highlight)', 
            borderRadius: 'var(--radius-full)', 
            color: 'white', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            fontWeight: 'bold',
            boxShadow: '0 4px 10px rgba(234, 178, 187, 0.3)'
          }}>A</div>
          {!isCollapsed && (
            <div style={{ overflow: 'hidden' }}>
              <p style={{ fontSize: '14px', fontWeight: '700', margin: 0, color: 'var(--text-main)' }}>Admin User</p>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: 0 }}>Super Admin</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
