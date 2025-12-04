import React from 'react';
import Header from '@/common/Header';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <>
      <Header />
      <main className="p-12 bg-gray-100 min-h-screen pt-32">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
