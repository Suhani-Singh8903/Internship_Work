import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img src="/logo.png" alt="Socio-Blah Logo" className="logo" />
        <h1 className='heading'>Socio-Blah!</h1>
        <nav className="header-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
