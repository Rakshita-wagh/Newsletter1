import React from "react";
import "./notification.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";

function Notification() {
  const navigate = useNavigate();
  const register = () => navigate("/register");

  return (
    <div className="notify move-enter show"> {/* Add move-enter and show classes */}
      <a onClick={register}>click here to register for latest events</a>
    </div>
  );
}

export default Notification;
