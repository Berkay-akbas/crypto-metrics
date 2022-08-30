import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CryptoList from './components/CryptoList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CryptoList />
      {/* <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/my-profile" element={<Profile />} />
      </Routes> */}
    </div>
  );
}

export default App;
