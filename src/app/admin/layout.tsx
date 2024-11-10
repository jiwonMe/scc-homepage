import React from 'react';
import { Sidebar } from '@/components/sidebar';

// Layout type definition for admin pages
interface AdminLayoutProps {
  children: React.ReactNode;
}

// Admin layout component with sidebar
const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar className="hidden md:flex" />
      <main className="flex flex-1 flex-col">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;