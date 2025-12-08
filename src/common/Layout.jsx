import React, { useEffect, useState } from 'react';
import Header from '@/common/Header';
import { Outlet, useLocation } from 'react-router-dom';
const Layout = () => {
  return (
    <>
      <Header />
      <main className=" bg-gray-100 min-h-screen pt-24">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
