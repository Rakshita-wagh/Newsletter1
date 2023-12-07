import React from "react";

function Register(){
    return (
        <form>
        <fieldset>
            <legend>collect basic data</legend>
            <label for="name">enter your full name</label>
              <input type="text" id="name"></input>
               <br></br>
             <label for="email">enter your email id</label>
             <input type="text" id="email"></input>
             <br></br>
             
             <label for="adress">enter adress</label>
              <textarea name="adress" id="adress" cols="30" rows="10"></textarea>
              <br></br>
                <label for="gender">select gender</label>
                <br></br>
              <label for="male">Male</label>
               <input type="radio" name="gender" id="male"></input>
               <br></br>
               <label for="female">female</label>
               <input type="radio" name="gender" id="female"></input>
               <br></br>
               <input type="submit"></input>

        </fieldset>
    </form>
    );
}
export default Register;