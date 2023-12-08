import React from "react";
import './notification.css';
import { useNavigate } from 'react-router-dom';




function Notification(){
    const navigate = useNavigate();
    const register = () => navigate('/register');
    return (
     <div className="notify">
      <a onClick={register}>click here to register for latest events</a>        

     </div>
    );
}
export default Notification;