import React, { useEffect, useState } from 'react';
import Header from '@/common/Header';
import { Outlet, useLocation } from 'react-router-dom';
import SearchLayer from '@/components/SearchLayer';
const Layout = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [keyword, setKeyword] = useState('');
  console.log(keyword);

  const location = useLocation();
  useEffect(() => {
    setSearchOpen(false);
    setKeyword('');
  }, [location.pathname]);
  return (
    <>
      <Header setSearchOpen={setSearchOpen} />
      {searchOpen && <SearchLayer setSearchOpen={setSearchOpen} />}
      <main className=" bg-gray-100 min-h-screen pt-24">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
