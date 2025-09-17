// import React, {useState} from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
// import { Link } from 'react-router-dom';
import Cards from './cards';

export default function Home() {
    return (
        <div className="space-container">
            <h1 className="header">Hello! <span className='specific-text'>I'm Jace!</span></h1>
            <p className="body-text">
                Welcome to my personal website! Here, I plan to show what i can do as a website developer  
                as well as do my best to consistently update it with works I've done over the many years I've 
                been a creative. Below are some small cards to showcase my social media, as well as a brief look into 
                a couple of my personal projects.
                
                <h4 className="header"><i>Please keep in mind this is an <span className="specific-text">actively-changing project,</span> and thus many things 
            still need to be polished! Nevertheless, enjoy your stay here all the while, <span className="specific-text">thank you!</span></i></h4>
            </p>
            
            <Cards />
        </div>
    )
}