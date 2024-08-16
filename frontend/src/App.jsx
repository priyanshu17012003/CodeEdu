import React from 'react';
import Home from "./pages/Home";
import SignIn from './components/SignIn';
import List from './components/List';
import Question from './components/Question';
import { Routes, Route } from 'react-router-dom';

function App() {
  
  return(
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/signup" element={<SignIn />} />
  <Route path="/list" element={<List />} />
  <Route path="/question/:id" element={<Question />} />
  </Routes>
  )
}

export default App;
