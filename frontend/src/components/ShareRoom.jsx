import React, { useState, useContext } from "react";
import { SocketContext } from "../Provider/SocketProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import "../styles/ShareRoom.scss"; 

function ShareRoom() {
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const navigate = useNavigate();
  const { socket } = useContext(SocketContext);

  
  const handleCopy = () => {
    if (socket && socket.id) {
      navigator.clipboard.writeText(socket.id);
      setCopied(true);
      toast.success("Socket ID Copied!");
      socket.emit("registerSocketId");

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };

  
  const openModal = () => {
    setIsModalOpen(true);
  };

  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>

      <button className="btn" onClick={openModal}>
        Join as an Interviewer
      </button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-box">
          
            <button className="close-btn" onClick={closeModal}>
              ✕
            </button>

            
            <h3 className="modal-header">Host</h3>

            
            <div>
              <input type="text" placeholder="Enter Room ID" className="input-room-id" />
            </div>

          
            <div className="modal-button">  
            <button className="btn-copy" onClick={handleCopy}>
              <span className="material-icons">content_copy</span>
              {copied ? "Socket ID Copied!" : "Copy Socket ID"}
            </button>

            <button className="btn-enter" onClick={() => navigate(`/playground/${socket.id}`)}>
              Enter
            </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ShareRoom;
