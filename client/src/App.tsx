import React from 'react';
import './App.css';
import { Home, Houselisting, Translator, Hostdashboard } from './pages';
import { Header, Footer } from './components';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home/>} />
        <Route path="listings" element={<Houselisting />}/>
        <Route path="translator" element={<Translator />}/>
        <Route path="host/dashboard" element={<Hostdashboard />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
