import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const token = localStorage.getItem('token');

  // If there's no token, redirect to the login page
  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  // If authenticated, render the child routes (in this case, AdminLayout)
  return <Outlet />;
};

export default ProtectedRoute;
