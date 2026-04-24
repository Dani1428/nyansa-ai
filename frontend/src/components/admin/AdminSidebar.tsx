import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/LOGOIA2.png';

const AdminSidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: 'dashboard' },
    { name: 'Project Requests', path: '/admin/projects', icon: 'assignment_late' },
    { name: 'Datasets Management', path: '/admin/datasets', icon: 'database' },
    { name: 'Languages & Experts', path: '/admin/languages', icon: 'translate' },
    { name: 'Settings', path: '/admin/settings', icon: 'settings' }
  ];

  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar-header" style={{ borderBottom: '1px solid var(--color-surface-container-high)', marginBottom: '1rem', paddingBottom: '1.5rem' }}>
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img src={logo} alt="nyansa" style={{ height: '50px', objectFit: 'contain' }} />
          <div>
            <h2 style={{ fontSize: '0.875rem', fontWeight: 900, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>Console</h2>
          </div>
        </Link>
      </div>

      <nav className="admin-sidebar-nav">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`admin-nav-item ${currentPath === item.path ? 'active' : ''}`}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="admin-sidebar-footer">
        <Link to="/admin/projects" style={{ textDecoration: 'none', width: '100%' }}>
          <button className="admin-btn-add">
            <span className="material-symbols-outlined">add</span>
            New Project
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default AdminSidebar;
