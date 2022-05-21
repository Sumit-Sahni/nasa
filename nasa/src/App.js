import React from 'react';
import './App.css';
import NasaApp from './NasaApp';
import Home from './Home';
import { BrowserRouter,Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/Nasa" exact element={<NasaApp/>} />
    <Route path="/" exact element={<Home/>} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
