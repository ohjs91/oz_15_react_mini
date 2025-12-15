import { lazy, Suspense, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from '@/common/Layout';
import Loading from '@/components/Loading';
const Home = lazy(() => import('@/pages/Home'));
const Details = lazy(() => import('@/pages/Detail'));
const NotFound = lazy(() => import('@/pages/NotFound'));
// const Loading = lazy(() => import('@/components/Loading'));
const Search = lazy(() => import('@/pages/Search'));
const Login = lazy(() => import('@/pages/Login'));
const Signup = lazy(() => import('@/pages/Signup'));
function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="details/:id" element={<Details />} />
          <Route path="search" element={<Search />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Suspense>
  );
}

export default App;
