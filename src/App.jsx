import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from '@/common/Layout';
import Home from '@/pages/Home';
import Details from '@/components/MovieDetail';
import NotFound from '@/pages/NotFound';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="details/:id" element={<Details />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
