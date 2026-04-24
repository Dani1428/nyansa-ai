import React, { useState } from 'react';

const AdminSettings = () => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="admin-page-container">
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Platform Settings</h1>
          <p className="admin-page-desc">Manage your admin profile, security preferences, and system configurations.</p>
        </div>
        <button className="admin-login-btn" style={{ width: 'auto', padding: '0.5rem 1.5rem', height: '2.5rem' }}>
          Save Changes
        </button>
      </div>

      <div className="admin-grid-12">
        {/* Settings Navigation */}
        <div className="admin-col-4">
          <div className="admin-card" style={{ padding: '0', overflow: 'hidden' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <button 
                onClick={() => setActiveTab('profile')}
                style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', background: activeTab === 'profile' ? 'var(--color-surface-container-high)' : 'none', border: 'none', borderLeft: activeTab === 'profile' ? '4px solid var(--color-primary)' : '4px solid transparent', textAlign: 'left', cursor: 'pointer', color: activeTab === 'profile' ? 'var(--color-primary)' : 'var(--color-on-surface)', transition: 'all 0.2s' }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '1.25rem' }}>person</span>
                <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>Profile Information</span>
              </button>
              
              <button 
                onClick={() => setActiveTab('security')}
                style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', background: activeTab === 'security' ? 'var(--color-surface-container-high)' : 'none', border: 'none', borderLeft: activeTab === 'security' ? '4px solid var(--color-primary)' : '4px solid transparent', textAlign: 'left', cursor: 'pointer', color: activeTab === 'security' ? 'var(--color-primary)' : 'var(--color-on-surface)', transition: 'all 0.2s' }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '1.25rem' }}>security</span>
                <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>Security & Passwords</span>
              </button>
              
              <button 
                onClick={() => setActiveTab('preferences')}
                style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', background: activeTab === 'preferences' ? 'var(--color-surface-container-high)' : 'none', border: 'none', borderLeft: activeTab === 'preferences' ? '4px solid var(--color-primary)' : '4px solid transparent', textAlign: 'left', cursor: 'pointer', color: activeTab === 'preferences' ? 'var(--color-primary)' : 'var(--color-on-surface)', transition: 'all 0.2s' }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '1.25rem' }}>tune</span>
                <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>Preferences</span>
              </button>
              
              <button 
                onClick={() => setActiveTab('api')}
                style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', background: activeTab === 'api' ? 'var(--color-surface-container-high)' : 'none', border: 'none', borderLeft: activeTab === 'api' ? '4px solid var(--color-primary)' : '4px solid transparent', textAlign: 'left', cursor: 'pointer', color: activeTab === 'api' ? 'var(--color-primary)' : 'var(--color-on-surface)', transition: 'all 0.2s' }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '1.25rem' }}>api</span>
                <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>API Keys</span>
              </button>
            </div>
          </div>
        </div>

        {/* Settings Content */}
        <div className="admin-col-8">
          <div className="admin-card" style={{ minHeight: '400px' }}>
            {activeTab === 'profile' && (
              <div style={{ animation: 'fadeIn 0.3s ease-out' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '1.5rem' }}>Profile Information</h3>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-uImxVou6Jqa3fvzk9C2Rhkc5oD6a4znOmyXvMn7-XmsAGBk7FpmX6xE6M7KsjKM5uLiOV2a9ERsEhaudDsv2hgIoYvgxgEMB12phlB3aQtMIC6TQrGCuwQpT8AE_bdwsU08amIAKEnNwHEO1dU52hQkJhle8UGDkFXNMNWyAfFvluXfaZgKgkEqJZT3CkMhPpMzFET6wLsFJl_JuL-snU2Wag1j86h5eX3PoS_4BhXhubakTM2bAYtUuzL97K5byYeCGAMnDGuEV" 
                    alt="Profile" 
                    style={{ width: '5rem', height: '5rem', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <div>
                    <button style={{ padding: '0.5rem 1rem', fontSize: '0.75rem', fontWeight: 600, backgroundColor: 'var(--color-surface-container-high)', border: '1px solid var(--color-border)', borderRadius: '0.5rem', cursor: 'pointer', marginRight: '0.5rem', color: 'var(--color-on-surface)' }}>Change Avatar</button>
                    <button style={{ padding: '0.5rem 1rem', fontSize: '0.75rem', fontWeight: 600, backgroundColor: 'transparent', color: 'var(--color-error)', border: 'none', cursor: 'pointer' }}>Remove</button>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-on-surface-variant)', marginBottom: '0.5rem' }}>First Name</label>
                    <input type="text" defaultValue="Admin" className="admin-login-input" />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-on-surface-variant)', marginBottom: '0.5rem' }}>Last Name</label>
                    <input type="text" defaultValue="User" className="admin-login-input" />
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-on-surface-variant)', marginBottom: '0.5rem' }}>Email Address</label>
                  <input type="email" defaultValue="admin@nyansa-ai.com" className="admin-login-input" />
                </div>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-on-surface-variant)', marginBottom: '0.5rem' }}>Role</label>
                  <input type="text" defaultValue="Super Administrator" disabled className="admin-login-input" style={{ backgroundColor: 'var(--color-surface-container-low)', cursor: 'not-allowed', opacity: 0.7 }} />
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div style={{ animation: 'fadeIn 0.3s ease-out' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '1.5rem' }}>Security & Passwords</h3>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-on-surface-variant)', marginBottom: '0.5rem' }}>Current Password</label>
                  <input type="password" placeholder="••••••••" className="admin-login-input" />
                </div>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-on-surface-variant)', marginBottom: '0.5rem' }}>New Password</label>
                  <input type="password" placeholder="••••••••" className="admin-login-input" />
                </div>
                
                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-on-surface-variant)', marginBottom: '0.5rem' }}>Confirm New Password</label>
                  <input type="password" placeholder="••••••••" className="admin-login-input" />
                </div>

                <div style={{ borderTop: '1px solid var(--color-surface-container-high)', paddingTop: '1.5rem' }}>
                  <h4 style={{ fontSize: '0.875rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--color-on-surface)' }}>Two-Factor Authentication (2FA)</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-on-surface-variant)', marginBottom: '1rem' }}>Add an extra layer of security to your account.</p>
                  <button style={{ padding: '0.5rem 1rem', fontSize: '0.75rem', fontWeight: 600, backgroundColor: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '0.5rem', cursor: 'pointer' }}>Enable 2FA</button>
                </div>
              </div>
            )}

            {activeTab === 'preferences' && (
              <div style={{ animation: 'fadeIn 0.3s ease-out', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', padding: '2rem', textAlign: 'center' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '3rem', color: 'var(--color-outline-variant)', marginBottom: '1rem' }}>tune</span>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 800, color: 'var(--color-on-surface)', marginBottom: '0.5rem' }}>Preferences</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-on-surface-variant)' }}>Settings for notifications and UI theme will be available in a future update.</p>
              </div>
            )}

            {activeTab === 'api' && (
              <div style={{ animation: 'fadeIn 0.3s ease-out', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', padding: '2rem', textAlign: 'center' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '3rem', color: 'var(--color-outline-variant)', marginBottom: '1rem' }}>api</span>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 800, color: 'var(--color-on-surface)', marginBottom: '0.5rem' }}>API Keys</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-on-surface-variant)' }}>API key management interface is currently under construction.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
