import React, { useState } from 'react';
import Sidebar from './layout/Sidebar';
import Navbar from './layout/Navbar';
import Dashboard from './pages/Dashboard';
import Visitors from './pages/Visitors';
import Tickets from './pages/Tickets';
import './styles/global.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/animations.css';

function App() {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('Dashboard');

  const toggleSidebar = () => {
    if (window.innerWidth <= 768) {
      setMobileMenuOpen(!isMobileMenuOpen);
    } else {
      setSidebarCollapsed(!isSidebarCollapsed);
    }
  };

  const renderPage = () => {
    switch(activePage) {
      case 'Dashboard': return <Dashboard />;
      case 'Visitors': return <Visitors />;
      case 'Tickets': return <Tickets />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar 
        isCollapsed={isSidebarCollapsed} 
        isMobileOpen={isMobileMenuOpen}
        onCloseMobile={() => setMobileMenuOpen(false)}
        activePage={activePage}
        setActivePage={setActivePage}
      />
      
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 999,
            backdropFilter: 'blur(4px)'
          }}
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <main className="main-layout">
        <Navbar onToggleSidebar={toggleSidebar} />
        <div className="content-wrapper">
          {renderPage()}
        </div>
      </main>
    </div>
  );
}

export default App;
