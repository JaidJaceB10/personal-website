import React from 'react';
// import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import './index.css';


export function Navbar() {
return (
  <nav className="navbar">
  <div className="container-fluid">
    <Link className="navbar-brand gradient-text" to="/">Jace's Website</Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Contact">Contact</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            My Projects
          </Link>
          <ul className="dropdown-menu">
            <li className="dropdown-item"><b>Computer Science</b></li>
            <li><Link className="dropdown-item" href="/">Project 1</Link></li>
            <li><Link className="dropdown-item" href="/">Project 2</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li className="dropdown-item"><b>Video Games</b></li>
            <li><Link className="dropdown-item" href="/">Project 3</Link></li>
            <li><Link className="dropdown-item" href="/">Project 4</Link></li>
          </ul>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</Link>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
)
}


export function Footer() {
    return(
        <footer className="footer">
            <div className="container">
                <p className="text-muted center">© 2025 Jace B. All rights reserved.</p>
            </div>
        </footer>
    );
}