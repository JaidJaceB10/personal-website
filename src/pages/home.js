// import React, {useState} from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
// import { Link } from 'react-router-dom';
import Cards from './cards';

export default function Home() {
    return (
        <div>
            <h1 className="header">Hello! <span className='specific-text'>I'm Jace!</span></h1>
            <p className="body-text">
                This is where the body of the website will be. <br />
                Content wil be added slowly. <br />
            </p>
            <Cards />
            <p className="body-text">
                This is where the body of the website will be. <br />
                Content wil be added slowly. <br />
            </p>
        </div>
    )
}