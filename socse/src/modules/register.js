import React from "react";
import './regiser.css';

function Register(){
    return ( 
    <div>
          <form className="forms">
          <label for="name">Your name:</label>
          <input type="text" value="" id="name" name="names" required placeholder=" Name"></input>
          <br></br>
          <br></br>
          <label for="email">Your Email:</label>
          <input type="email" value="" id="email"  name="emails" required placeholder="Email"></input>
          <br></br>
          <br></br>
          <label for="pass"> Your Password:</label> 
          <input  type="password" value="" id="pass" name="passes" required placeholder="pass"></input>
          <br></br>
          <br></br>
         <button>Submit</button>
          </form>
   </div>
     
    );
}
export default Register;
