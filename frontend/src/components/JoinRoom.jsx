import React, { useState, useContext } from "react";
import { SocketContext } from "../Provider/SocketProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import "../styles/JoinRoom.scss";

function JoinRoom() {
  const [hostSocketId, setHostSocketId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const navigate = useNavigate();
  const { socket } = useContext(SocketContext);

  const handleConnect = () => {
    if (socket && hostSocketId) {
      socket.emit("joinRoom", hostSocketId);
      socket.emit("registerCandidate");
      toast.success(`Connected to host: ${hostSocketId}`);
      navigate(`/playground/${hostSocketId}`);
    } else {
      toast.error("Please enter a valid Socket ID.");
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
      <button className="btn-join" onClick={openModal}>
        Join as a Candidate
      </button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            
            <button className="close-modal" onClick={closeModal}>
              ✕
            </button>
            
            <h3 className="modal-header">Enter Room ID</h3>

            <input
              type="text"
              placeholder="Enter Room ID"
              value={hostSocketId}
              onChange={(e) => setHostSocketId(e.target.value)}
              className="input-room-id"
            />

            <div className="modal-buttons">
              <button className="modal-btn" onClick={handleConnect}>
                Enter
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default JoinRoom;
