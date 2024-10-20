import React from 'react';
import ShareRoom from '../components/ShareRoom';
import JoinRoom from '../components/JoinRoom';
import Rules from '../components/Rules';
import '../styles/NewHome.scss'; 
import Navbar from '../components/Navbar';

function NewHome() {
  return (
    <>
    <Navbar></Navbar>
    <div className="new-home-container min-h-screen min-w-screen">
      <div className="left-section">
        <JoinRoom />
        <br></br>
        <ShareRoom />
      </div>
      <div className="right-section">
        <Rules />
      </div>
    </div>
    </>
  );
}

export default NewHome;
