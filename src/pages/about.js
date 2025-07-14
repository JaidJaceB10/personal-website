import React from 'react';
// import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import './index.css';

export default function About() {
    return (
        <div>
            <h3>Hi there!</h3>
            <p>
                Hello! My name is Jace Bondoc! I am a:
                <br />
                <br />
                <li> <span className='specific-text'>front-end developer</span> with a passion for creating web applications, </li>
                <li> practicing <span className='specific-text'>game developer</span>, with extensive practice on Ren'py and basics on Unity, </li>
                <li> <span className='specific-text'>digital artist</span> who's been drawing for over ten years, and</li>
                <li> <span className='specific-text'>creative writer</span> who takes free time to hone her written craft.</li> <br />
                This website is a showcase of both my works and skill into one personal practice project. <br />
                <br />
                Feel free to explore and learn more! If you want to directly contact me, <Link className="text-highlight" to="/Contact">check out the Contact Page!</Link>
            </p>
            <p>
                <h3>Education</h3>
                <li> Associate’s Degree in English</li>
                <li> Bachelor’s Degree in Computer Science (Minor in Video Game Studies)</li>
            </p>
        </div>
    );
}