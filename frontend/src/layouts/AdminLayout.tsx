import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/admin/AdminSidebar';
import AdminHeader from '../components/admin/AdminHeader';
import '../admin.css'; // Import the isolated admin styles

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <AdminSidebar />
      <main className="admin-main-content">
        <AdminHeader />
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
