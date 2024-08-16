import React from 'react';
import Home from "./pages/Home";
import SignIn from './components/SignIn';
import { Routes, Route } from 'react-router-dom';

function App() {
  
  return(
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/signup" element={<SignIn />} />
  </Routes>
  )
}

export default App;
