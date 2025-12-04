import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from '@/common/Layout';
import Home from '@/pages/Home';
import Details from '@/pages/Details';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="details" element={<Details />} />
      </Route>
    </Routes>
  );
}

export default App;
