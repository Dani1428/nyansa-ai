import React, { useState, useEffect } from 'react';

interface ProjectRequest {
  id: string;
  name: string;
  email: string;
  project_type: string;
  status: 'New' | 'In Review' | 'Approved' | 'Rejected';
  created_at: string;
  ai_suggestion?: string;
}

const ProjectRequests = () => {
  const [requests, setRequests] = useState<ProjectRequest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setOpenDropdownId(null);
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    fetch('/api/v1/contact/')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => setRequests(data))
      .catch(err => console.error('Error fetching project requests:', err))
      .finally(() => setIsLoading(false));
  }, []);

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  const formatDate = (dateString: string) => {
    const d = new Date(dateString);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const response = await fetch(`/api/v1/contact/${id}/`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      if (response.ok) {
        setRequests(requests.map(req => req.id === id ? { ...req, status: newStatus as any } : req));
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const getProjectTypeStyles = (type: string) => {
    switch(type) {
      case 'Language Request':
        return { backgroundColor: 'rgba(98, 0, 238, 0.1)', color: '#6200EE' };
      case 'Expert Application':
        return { backgroundColor: 'rgba(3, 218, 198, 0.1)', color: '#018786' };
      case 'Dataset Inquiry':
        return { backgroundColor: 'rgba(255, 152, 0, 0.1)', color: '#EF6C00' };
      default:
        return { backgroundColor: 'rgba(31, 122, 99, 0.1)', color: 'var(--color-primary)' };
    }
  };

  return (
    <div className="admin-page-container">
      <div className="admin-page-header">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
            <span style={{ color: 'var(--color-primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.625rem' }}>Data Management</span>
          </div>
          <h2 className="admin-page-title">Project Requests</h2>
          <p className="admin-page-desc">Review and manage incoming agricultural linguistic inquiries.</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'var(--color-surface-container-low)', padding: '0.375rem', borderRadius: '0.75rem', border: '1px solid rgba(0,0,0,0.05)' }}>
          <button style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: 800, backgroundColor: 'var(--color-white)', color: 'var(--color-primary)', border: 'none', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', cursor: 'pointer' }}>All</button>
          <button style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-on-surface-variant)', background: 'none', border: 'none', cursor: 'pointer' }}>New</button>
          <button style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-on-surface-variant)', background: 'none', border: 'none', cursor: 'pointer' }}>Pending</button>
        </div>
      </div>

      <div className="admin-grid admin-grid-cols-4" style={{ marginBottom: '2.5rem' }}>
        <div className="admin-card">
          <p style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-on-surface-variant)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>Total Requests</p>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 900 }}>{requests.length}</h3>
          <div style={{ marginTop: '0.5rem', color: 'var(--color-secondary)', fontSize: '0.75rem', fontWeight: 800, display: 'flex', alignItems: 'center' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '0.875rem', marginRight: '0.25rem' }}>trending_up</span> All time
          </div>
        </div>
        <div className="admin-card">
          <p style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-on-surface-variant)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>New Inquiries</p>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--color-primary-container)' }}>{requests.filter(r => r.status === 'New').length}</h3>
          <div style={{ marginTop: '0.5rem', color: 'var(--color-primary-container)', fontSize: '0.75rem', fontWeight: 800, display: 'flex', alignItems: 'center' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '0.875rem', marginRight: '0.25rem' }}>schedule</span> Awaiting review
          </div>
        </div>
        <div className="admin-card">
          <p style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-on-surface-variant)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>Avg. Response Time</p>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 900 }}>4.2h</h3>
          <div style={{ marginTop: '0.5rem', color: 'var(--color-secondary)', fontSize: '0.75rem', fontWeight: 800, display: 'flex', alignItems: 'center' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '0.875rem', marginRight: '0.25rem' }}>bolt</span> Exceeding target
          </div>
        </div>
        <div className="admin-card">
          <p style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-on-surface-variant)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>Completion Rate</p>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 900 }}>94.8%</h3>
          <div style={{ marginTop: '0.5rem', color: 'var(--color-secondary)', fontSize: '0.75rem', fontWeight: 800, display: 'flex', alignItems: 'center' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '0.875rem', marginRight: '0.25rem' }}>check_circle</span> Consistent quality
          </div>
        </div>
      </div>

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Project Type</th>
              <th>Status</th>
              <th>Date</th>
              <th style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr><td colSpan={6} style={{ textAlign: 'center', padding: '2rem' }}>Loading requests...</td></tr>
            ) : requests.length === 0 ? (
              <tr><td colSpan={6} style={{ textAlign: 'center', padding: '2rem' }}>No requests found.</td></tr>
            ) : requests.map((req) => (
              <tr key={req.id}>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: 'rgba(107, 254, 156, 0.2)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800 }}>
                      {getInitials(req.name)}
                    </div>
                    <span style={{ fontWeight: 800, color: 'var(--color-on-surface)' }}>{req.name}</span>
                  </div>
                </td>
                <td style={{ color: 'var(--color-on-surface-variant)', fontSize: '0.875rem' }}>{req.email}</td>
                <td>
                  <span style={{ padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.625rem', fontWeight: 800, textTransform: 'uppercase', ...getProjectTypeStyles(req.project_type) }}>
                    {req.project_type}
                  </span>
                </td>
                <td>
                  <span style={{ padding: '0.25rem 0.75rem', backgroundColor: req.status === 'New' ? 'var(--color-primary-container)' : req.status === 'In Review' ? 'var(--color-tertiary)' : 'var(--color-secondary)', color: 'white', borderRadius: '9999px', fontSize: '0.625rem', fontWeight: 800, textTransform: 'uppercase' }}>
                    {req.status}
                  </span>
                </td>
                <td style={{ color: 'var(--color-on-surface-variant)', fontSize: '0.875rem' }}>{formatDate(req.created_at)}</td>
                <td style={{ textAlign: 'right', position: 'relative' }}>
                  <button 
                    className="admin-icon-btn" 
                    style={{ marginLeft: 'auto' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenDropdownId(openDropdownId === req.id ? null : req.id);
                    }}
                  >
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                  {openDropdownId === req.id && (
                    <div style={{ position: 'absolute', right: '2rem', top: '2rem', backgroundColor: 'var(--color-surface-container-high)', borderRadius: '0.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', zIndex: 50, overflow: 'hidden', minWidth: '140px', border: '1px solid var(--color-border)', textAlign: 'left' }}>
                      <button onClick={() => updateStatus(req.id, 'In Review')} style={{ display: 'block', width: '100%', padding: '0.75rem 1rem', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-on-surface)' }}>Mark In Review</button>
                      <button onClick={() => updateStatus(req.id, 'Approved')} style={{ display: 'block', width: '100%', padding: '0.75rem 1rem', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-secondary)' }}>Approve</button>
                      <button onClick={() => updateStatus(req.id, 'Rejected')} style={{ display: 'block', width: '100%', padding: '0.75rem 1rem', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-error)' }}>Reject</button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--color-surface-container-low)' }}>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-on-surface-variant)', fontWeight: 600 }}>
            Showing <span style={{ color: 'var(--color-on-surface)', fontWeight: 800 }}>1-5</span> of <span style={{ color: 'var(--color-on-surface)', fontWeight: 800 }}>42</span> new requests
          </p>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button style={{ padding: '0.5rem', border: '1px solid var(--color-border)', borderRadius: '0.5rem', background: 'none', cursor: 'not-allowed', opacity: 0.5, display: 'flex' }} disabled>
              <span className="material-symbols-outlined" style={{ fontSize: '1.125rem' }}>chevron_left</span>
            </button>
            <button style={{ padding: '0.5rem', border: '1px solid var(--color-border)', borderRadius: '0.5rem', background: 'none', cursor: 'pointer', display: 'flex' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '1.125rem' }}>chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      <div className="admin-grid admin-grid-cols-3" style={{ marginTop: '3rem' }}>
        <div style={{ gridColumn: 'span 2', position: 'relative', height: '320px', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaSp7j-8B3d9TsxAhRD8iNIsm3OLIiCUBM6TQx_WHSgr60M4eURJB1yypw_GKcXzEbUq601MWXiDfE4Rtvm2w1X_9pO9Fr1W_0x2McGddjVFjpFAA-rVqkXgKpXE94un9vb6Ro_TxlFrLkwRJ4VyjwbLgA6RBzVkvpYGcxa9XEql5q40SgvIhcEE8QZc5ugfnnziFw6Q7xl29FtaecdAnwZ8ctFeT2k8YbSUl6JUnKfXmZ-vTvJHgX84pVernht9ZyZdLir-j7xCGq" alt="Nodes" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3), transparent)' }}></div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '2rem' }}>
            <span style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.625rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'inline-block', marginBottom: '1rem' }}>Admin Spotlight</span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white', marginBottom: '0.5rem' }}>High Impact Language Datasets</h3>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem', maxWidth: '28rem' }}>We've seen a 40% increase in requests for Sub-Saharan agricultural dialect mapping this quarter.</p>
          </div>
        </div>
        <div style={{ backgroundColor: 'var(--color-primary-container)', padding: '2rem', borderRadius: '1rem', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
          <div>
            <span className="material-symbols-outlined" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', display: 'block' }}>auto_awesome</span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.75rem' }}>AI Recommendation</h3>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem', lineHeight: 1.6 }}>Prioritize the "Soil Classification" requests from Elena Kostic based on existing expert availability in the Croatian region.</p>
          </div>
          <button style={{ width: '100%', marginTop: '2rem', padding: '0.75rem', backgroundColor: 'white', color: 'var(--color-primary)', fontWeight: 800, borderRadius: '0.75rem', border: 'none', cursor: 'pointer' }}>
            Quick Assign
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectRequests;
