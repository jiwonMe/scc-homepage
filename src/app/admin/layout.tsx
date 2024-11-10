import React from 'react';
import { AppSidebar } from '@/components/admin/app-sidebar';

// Layout type definition for admin pages
interface AdminLayoutProps {
  children: React.ReactNode;
}

// Admin layout component with sidebar
const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <AppSidebar />
      <main className="flex flex-1 flex-col">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;