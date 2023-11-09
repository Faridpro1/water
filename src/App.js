import React from 'react';
import './App.css';
import Nav from "./Componets/Nav/Nav"
import Carusel from "./Componets/Carusel/Carusel"
import Info from './Componets/Info/Info';
import { Routes, Route } from 'react-router-dom'
import Main from './Main';
import Contact1 from './Componets/Contact/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/contact" element={<Info/>}/>
        <Route path="/about" element={<Contact1/>}/>

      </Routes>
    </div>
  );
}

export default App;
