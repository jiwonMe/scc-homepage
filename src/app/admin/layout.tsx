import React from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/admin/app-sidebar";
import Navbar from '@/components/admin/navbar';
import Footer from '@/components/footer';

// Admin Layout
const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
      <div className="min-h-screen flex flex-col w-full">
        <Navbar />
        {children}
        <Footer />
    </div>
      </main>
      </SidebarProvider>
  );
};

export default AdminLayout;
