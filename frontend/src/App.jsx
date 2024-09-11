import React from 'react';
import Home from "./pages/Home";
import SignUp from './components/SignUp';
import List from './components/List';
import Question from './components/Question';
import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';

function App() {
  
  return(
  <>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/signup" element={<SignUp />} />
  <Route path="/list" element={<List />} />
  <Route path="/question/:id" element={<Question />} />
  <Route path="/profile" element={<Profile/>}/>
  </Routes>
  <Toaster />
  </>
  )
}

export default App;
