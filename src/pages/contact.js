import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { Link } from 'react-router-dom';
import './index.css';
import JacePhone from '../images/Jace_phone.png';

export default function Contact() {
    return (
        <div className="space-container">
            <h2 className="header">Contact Me</h2>
            <div className="align-container">
                <img className="my-image" src={JacePhone} alt="Drawn Jace with a phone"/>
                <p>
                    <h2><b>Social Media</b></h2>
                    <li><a className="text-highlight" href="https://www.instagram.com/applerose301/"><u>Art Instagram</u></a></li>
                    <li><a className="text-highlight" href="https://github.com/JaidJaceB10"><u>GitHub</u></a></li>
                    <li><a className="text-highlight" href="https://www.linkedin.com/in/jaideen-jace-bondoc-73a724323/"><u>LinkedIn</u></a></li>
                    <br/>
                    <p />
                    <h2><b>Personal Contact</b></h2>
                    <p />
                    If you would like to contact me for any business inquiries, please send an email to: <br />
                    <a className='specific-text' href="mailto: jaideenjacebondoc@gmail.com">jaideenjacebondoc@gmail.com</a>
                </p>
            </div>
            

        </div>
    )
}