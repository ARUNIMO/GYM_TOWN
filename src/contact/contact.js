import './contact.css'
import React from 'react';
import sample5 from './con.webp'
function Contact(){
    return(
    <>     
    <img class='img' src={sample5} />
            <div className='img-over'>  
    <div className="Contact-Form">
        <div className="heading">
            <h1>CON<span style={{color: "coral"}}>TACT</span></h1>
        </div>
        <div className="contact-box">
            <form>
                <input type="text" class="input-feild" name="yname" placeholder="YOURNAME*" /><br />
                <input type="email" class="input-feild" name="em" placeholder="E-MAIL*" /><br />
                <input type="text" class="input-feild" name="sub" placeholder="SUBJECT*" /><br />
                <textarea type="text" class="input-feild textarea-feild" name="msg"
                    placeholder="MESSAGE*"></textarea><br />
                <button type="submit" class="btn">SUBMIT</button>
            </form>
        </div>
        </div>
        </div>
        </>
        
    )
}
export default Contact;