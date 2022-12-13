import React from 'react';
import { Button} from '@mui/material';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from '../Login/login';
//import { Link } from 'react-router-dom';
import '../css/font-awesome.css'
import '../css/templatemo-training-studio.css'
import sample from '../css/gym-video.mp4';
import '../css/bootstrap.min.css'
import Layout from '../layout';
function Home(){
    return(
/*<>
<header class="header-area header-sticky">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav class="main-nav">
                        
                        <a href="index.html" class="logo">GYM <em>TOWN</em></a>
                        
                        <ButtonGroup class="nav">
                            <Button class="scroll-to-section" variant='outlined' color='primary' ><span >Home</span></Button>
                            <Button class="scroll-to-section" variant='text'><span>About</span></Button>
                            <Button class="main-button"><Link href="#/login.js">Login</Link></Button>
                        </ButtonGroup>        
                        <a class='menu-trigger'>
                            <span>Menu</span>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    </header>*/
    <>
    
<video className='bg-video' autoPlay loop muted>
    <source src={sample} type='video/mp4' />
</video>
<div className='video-overlay'>
    <div className='caption'>
                <h6 className='h3'><b>work harder, get stronger</b></h6>
                <h2 className='h2'><b>easy with our <em className='em'>gym</em></b></h2>
                <div className='main-button scroll-to-section'>
                    <a href="#features">Become a member</a>
                </div>
                </div>
    </div>
</>
    )
}
export default Home;