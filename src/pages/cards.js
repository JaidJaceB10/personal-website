import React, {useState} from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
// import { Link } from 'react-router-dom';
import BTDCover from '../images/BTD_Cover.png';
import FishingForCover from '../images/FishingForCover.png';
import ParadisPromCover from '../images/ParadisProm_Cover.png';
import JaceHi from '../images/Jace_hi.png';

const cards = [
        {
        title: 'Welcome to my personal website!',
        content: "Front-end Developer, Digital Artist, Practicing Game Developer",
        socials: [
            { 
        name: 'GitHub', 
        icon: process.env.PUBLIC_URL + '/icons/github_icon.png', 
        url: 'https://github.com/JaidJaceB10' 
      },
      { 
        name: 'LinkedIn', 
        icon: process.env.PUBLIC_URL + '/icons/linkedin_icon.png', 
        url: 'https://www.linkedin.com/in/jaideen-jace-bondoc-73a724323/' 
      },
      { 
        name:'Art Instagram', 
        icon: process.env.PUBLIC_URL + '/icons/ig_icon.png', 
        url: 'https://www.instagram.com/applerose301/' 
      },
    ]
  },
        {
        title: 'Here are some of my projects!',
        content: "Below are just a few project thumbnails I've worked on! If you'd like to know more, please check out the 'My Projects' dropmenu!",
        image: [
            { 
        name: 'Beyond the Depths', 
        cover: BTDCover, 
        // url: '/personal-website/characterdesign' 
      },
      { 
        name: 'Fishing For..?', 
        cover: FishingForCover, 
        // url: '/personal-website/storyboards' 
      },
      { 
        name:'Paradiso Promenade', 
        cover: ParadisPromCover, 
        // url: '/personal-website/paradisprom' 
      },
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
                            {/* Show project images only on the second card */}
                            {rotation === 0 && index === 1 ? (
                            <div className="project-images">
                                {card.image.map((project, i) => (
                                // <a key={i} href={project.url} target="_blank" rel="noopener noreferrer">
                                    <img
                                    src={project.cover}
                                    alt={project.name}
                                    className="project-cover"
                                    title={project.name}
                                    />
                                // </a>
                                ))}
                            </div>
                            ) : (
                            // Show single image for other cards
                            typeof card.image === 'string' && (
                                <img src={card.image} alt={card.title} />
                            )
                            )}
                        </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}