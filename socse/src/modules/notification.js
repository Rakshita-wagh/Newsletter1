// Notification.js

import React from "react";
import './notification.css';
import { useNavigate } from 'react-router-dom';

function Notification() {
  const navigate = useNavigate();
  const register = () => navigate('/register');

  return (
    <div className="notify">
      <a onClick={register}>Click here to register for the latest events</a>
    </div>
  );
}

export default Notification;
