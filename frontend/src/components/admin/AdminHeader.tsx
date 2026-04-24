import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminHeader = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();
  const profileRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    // Clear the auth token
    localStorage.removeItem('token');
    // Navigate to the login page when logout is clicked
    navigate('/admin/login');
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="admin-header">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
        <div className="admin-search-box">
          <span className="material-symbols-outlined">search</span>
          <input
            type="text"
            className="admin-search-input"
            placeholder="Search data modules..."
          />
        </div>
      </div>

      <div className="admin-header-actions">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button 
            className="admin-icon-btn" 
            onClick={() => alert('No new notifications')}
          >
            <span className="material-symbols-outlined">notifications</span>
            <span className="admin-notification-dot"></span>
          </button>
          <button 
            className="admin-icon-btn"
            onClick={() => window.open('https://docs.nyansa-ai.com', '_blank')}
          >
            <span className="material-symbols-outlined">help</span>
          </button>
        </div>
        
        <div className="admin-divider"></div>
        
        <div 
          className="admin-profile" 
          ref={profileRef}
          onClick={() => setIsProfileOpen(!isProfileOpen)}
          style={{ position: 'relative' }}
        >
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-uImxVou6Jqa3fvzk9C2Rhkc5oD6a4znOmyXvMn7-XmsAGBk7FpmX6xE6M7KsjKM5uLiOV2a9ERsEhaudDsv2hgIoYvgxgEMB12phlB3aQtMIC6TQrGCuwQpT8AE_bdwsU08amIAKEnNwHEO1dU52hQkJhle8UGDkFXNMNWyAfFvluXfaZgKgkEqJZT3CkMhPpMzFET6wLsFJl_JuL-snU2Wag1j86h5eX3PoS_4BhXhubakTM2bAYtUuzL97K5byYeCGAMnDGuEV"
            alt="Admin Profile"
          />
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <span>Profile Settings</span>
            <span className="material-symbols-outlined" style={{ fontSize: '1.25rem', transition: 'transform 0.2s', transform: isProfileOpen ? 'rotate(180deg)' : 'none' }}>
              expand_more
            </span>
          </div>

          {isProfileOpen && (
            <div style={{ 
              position: 'absolute', 
              top: 'calc(100% + 1rem)', 
              right: 0, 
              backgroundColor: 'white', 
              borderRadius: '0.5rem', 
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', 
              border: '1px solid var(--color-border)',
              width: '12rem',
              zIndex: 50,
              padding: '0.5rem'
            }}>
              <div style={{ padding: '0.5rem', borderBottom: '1px solid var(--color-border)', marginBottom: '0.5rem' }}>
                <p style={{ fontSize: '0.875rem', fontWeight: 800, margin: 0, color: 'var(--color-on-surface)' }}>Admin User</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--color-on-surface-variant)', margin: 0 }}>admin@nyansa-ai.com</p>
              </div>
              <button 
                onClick={() => {
                  setIsProfileOpen(false);
                  navigate('/admin/settings');
                }}
                style={{ 
                  width: '100%', 
                  textAlign: 'left', 
                  padding: '0.5rem', 
                  background: 'none', 
                  border: 'none', 
                  cursor: 'pointer', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  color: 'var(--color-on-surface)',
                  borderRadius: '0.25rem',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  marginBottom: '0.25rem'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--color-surface-container-high)'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '1.25rem', color: 'var(--color-on-surface-variant)' }}>settings</span>
                Settings
              </button>
              
              <button 
                onClick={handleLogout}
                style={{ 
                  width: '100%', 
                  textAlign: 'left', 
                  padding: '0.5rem', 
                  background: 'none', 
                  border: 'none', 
                  cursor: 'pointer', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  color: 'var(--color-error)',
                  borderRadius: '0.25rem',
                  fontSize: '0.875rem',
                  fontWeight: 600
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(186, 26, 26, 0.1)'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '1.25rem' }}>logout</span>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
