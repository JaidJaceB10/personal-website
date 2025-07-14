import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {Navbar, Footer} from './pages/Layout';
import AppRoutes from './pages/Routes';

function App() {
  return (
    <div className="app-container">
    <Navbar />
      <main style={{ padding: "1rem" }}>
        <AppRoutes />
      </main>
    <hr />
    <Footer />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </React.StrictMode>
);
