import React from 'react';
import './login.css'
import sample4 from './opp.jpeg'
//import './App.css'

function Login(){
  return (
      <>
        <img class='img' src={sample4} />
            <div className='img-over'>
        
      <h1>
           <span class="log">LOG  &nbsp;</span><span class="in">IN</span>
        </h1>
        <form>
            <label class="email" for="em">Email&nbsp;&nbsp;:</label>
            <input class="inputemail" type="text" id="em"/>
            <label class="password" for="pass">Password&nbsp;&nbsp;:</label>
            <input class="inputpass" id="pass" type="password"/>
            <label class="clk" for="clk">Click&nbsp;to&nbsp;argee&nbsp;terms&nbsp;and&nbsp;conditions</label>
            <input class="ckbox" type="checkbox" id="clk" name="clk"/>
            <input class="sub" type="submit" />
        </form>
        

    </div>
      </>
    
  )
}
export default Login;
