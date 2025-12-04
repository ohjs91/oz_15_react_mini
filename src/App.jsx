import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from '@/common/Layout';
import Home from '@/pages/Home';
import Details from '@/components/MovieDetail';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="details/:id" element={<Details />} />
      </Route>
    </Routes>
  );
}

export default App;
