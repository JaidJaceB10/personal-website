// AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';
import Storyboards from './storyboards';
import FullPieces from './fullpieces';
import CharacterDesign from './characterdesign';
import ConfectioneryChaos from './confectchaos';
import ParadisoPromenade from './paradisprom';
import TheTreesAreListening from './treeslisten';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/personal-website/" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="" element={<Home />} />
      <Route path="https://jaidjaceb10.github.io/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/personal-website/about" element={<About />} />
      <Route path="https://jaidjaceb10.github.io/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/personal-website/contact" element={<Contact />} />
      <Route path="https://jaidjaceb10.github.io/contact" element={<Contact />} />
      <Route path="/storyboards" element={<Storyboards />} />
      <Route path="/personal-website/storyboards" element={<Storyboards />} />
      <Route path="https://jaidjaceb10.github.io/storyboards" element={<Storyboards />} />
      <Route path="/fullpieces" element={<FullPieces />} />
      <Route path="/personal-website/fullpieces" element={<FullPieces />} />
      <Route path="https://jaidjaceb10.github.io/fullpieces" element={<FullPieces />} />
      <Route path="/characterdesign" element={<CharacterDesign />} />
      <Route path="/personal-website/characterdesign" element={<CharacterDesign />} />
      <Route path="https://jaidjaceb10.github.io/characterdesign" element={<CharacterDesign />} />
      <Route path="/confectchaos" element={<ConfectioneryChaos />} />
      <Route path="/personal-website/confectchaos" element={<ConfectioneryChaos />} />
      <Route path="https://jaidjaceb10.github.io/confectchaos" element={<ConfectioneryChaos />} />
      <Route path="/paradisprom" element={<ParadisoPromenade />} />
      <Route path="/personal-website/paradisprom" element={<ParadisoPromenade />} />
      <Route path="https://jaidjaceb10.github.io/paradisprom" element={<ParadisoPromenade />} />
      <Route path="https://jaidjaceb10.github.io/personal-website/paradisprom" element={<ParadisoPromenade />} />
      <Route path="/treeslisten" element={<TheTreesAreListening />} />
      <Route path="/personal-website/treeslisten" element={<TheTreesAreListening />} />
      <Route path="https://jaidjaceb10.github.io/treeslisten" element={<TheTreesAreListening />} />
      {/* Add more routes as needed */}
    
      <Route path="*" element={<h2>404 - Page Not Found</h2>} />
    </Routes>
  );
}
