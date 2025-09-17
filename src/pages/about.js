// import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import casualPortrait from '../images/jaceportrait.jpg';
import gradPortrait from '../images/jaceportrait2.jpg';

export default function About() {

    return (

        <div className="space-container">
            <h2 className="header">Hi there!</h2>

            <div className="portrait-container">
                <img src={gradPortrait} alt="Jace pictured in SFSU graduation gown" className="portrait-img" />
                <img src={casualPortrait} alt="Jace pictured in casual clothes" className="portrait-img2" />
            </div>

            <p>
                Hello! My name is Jace Bondoc! I am a:
                <br />
                <br />
                <li> <span className="specific-text">front-end developer</span> with a passion for creating web applications, </li>
                <li> practicing <span className="specific-text">game developer</span>, with extensive practice on Ren'py and basics on Unity, </li>
                <li> <span className="specific-text">digital artist</span> who's been drawing for over ten years, and</li>
                <li> <span className="specific-text">creative writer</span> who takes free time to hone her written craft.</li> <br />
                This website is a showcase of both my works and skill into one personal practice project. <br />
                Feel free to explore and learn more! If you want to directly contact me, <Link className="text-highlight" to="/Contact"><u>check out the Contact Page!</u></Link>
            </p>
            <br />
            <p>
                <h3>Education</h3>
                <ul>
                    <li> <b>City College of San Francisco</b> - Associate’s Degree in English <i>(2019 - 2021)</i></li>
                    <li> <b>San Francisco State Univeristy</b> - Bachelor’s Degree in Computer Science (Minor in Video Game Studies) <i>(2021 - 2025)</i></li>
                </ul>
            </p>
            <p>
                <h3>Experience</h3>
                <ul>
                    <li> <b>Raoul Wallenberg Traditional High School (RWHS)</b> - ICT Tutor <i>(2017 - 2018)</i></li>
                        <ul>
                            <li>After-school tutoring for both English and ICT Programming, under supervision of classroom teacher.</li>
                        </ul>
                    <li> <b>dsk architects</b> - Student Volunteer <i>(2017 - 2018)</i></li>
                        <ul>
                            <li>Volunteered to scan large format drawings.</li>
                        </ul>
                    <li> <b>Folsom Apartments</b> - Student Volunteer <i>(2017 - 2018)</i></li>
                        <ul>
                            <li>Assigned to do office work help, which consists of sorting documents and handling rental payments.</li>
                        </ul>
                </ul>
            </p>
        </div>
    );
}