import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CryptoList from './components/CryptoList';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <CryptoList /> */}
      <Routes>
        <Route path="/" element={<CryptoList />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
