import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import './index.css';

export default function Contact() {
    return (
        <div>
            <h2 className="header">Contact Me</h2>
            <p>
                If you would like to contact me, please send an email to: <br />
                <a className='specific-text' href="mailto: jaideenjacebondoc@gmail.com">jaideenjacebondoc@gmail.com</a>
            </p>
        </div>
    )
}