// AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<h2>404 - Page Not Found</h2>} />
    </Routes>
  );
}
