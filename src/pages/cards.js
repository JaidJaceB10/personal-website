import React, {useState} from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
// import { Link } from 'react-router-dom';
import BTDCover from '../images/BTD_Cover.png';
import FishingForCover from '../images/FishingForCover.png';
import JaceHi from '../images/Jace_hi.png';

const cards = [
        {
        title: 'Welcome to my personal website!',
        content: "Front-end Developer, Digital Artist, Practicing Game Developer",
        socials: [
            {name: 'GitHub', icon: '/icons/github_icon.png', url: 'https://github.com/JaidJaceB10'},
            {name: 'LinkedIn', icon: '/icons/linkedin_icon.png', url: 'https://www.linkedin.com/in/jaideen-jace-bondoc-73a724323/'},
            {name:'Art Instagram', icon: '/icons/ig_icon.png', url: 'https://www.instagram.com/applerose301/'},
        ]
        },
        {
        title: 'Here are some of my projects!',
        content: "Below are just a few projects I've worked on!",
        image: [
            {name: 'Beyond the Depths', image: BTDCover, link:''},
            {name: 'Fishing For...?', image: FishingForCover, link:''},
            {name: 'Paradiso Promenade', image:'https://via.placeholder.com/150/16a085/FFFFFF?text=Card+2', link:''},
        ]
        },
        {
        title: 'Thanks for visiting!',
        content: "Thank you for checking out what I have so far!",
        image: JaceHi,
        }
    ];

export default function Cards() {
    const [cardIndex, setCardIndex] = useState(0);

    const handleNext = () => {
        setCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    return (
        <div className="home-wrapper">
            <div className="card-scene" onClick={handleNext}>
                {cards.map((card, index) => {
                const rotation = (index - cardIndex + cards.length) % cards.length;
                    return (
                        <div
                        key={index}
                        className={`card ${rotation === 0 ? 'front' : rotation === 1 ? 'middle' : 'back'}`}
                        >
                            <div className="card-content text-color">
                            <h3>{card.title}</h3>
                            <p>{card.content}</p>
                            <img src={card.image} alt={card.title}/>

                            {/* 👇 Add this only if it's card 0 and has socials */}
                            {rotation === 0 && card.socials && (
                            <div className="social-icons">
                                {card.socials.map((social, i) => (
                                <a key={i} href={social.url} target="_blank" rel="noopener noreferrer">
                                    <img
                                    src={social.icon}
                                    alt={social.name}
                                    className="social-icon"
                                    title={social.name}
                                    />
                                </a>
                                ))}
                            </div>
                            )}
                        </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}