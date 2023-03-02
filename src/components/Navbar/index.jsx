/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';

const Navbar = () => {
  const { preferredTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <div className="nav-container" style={{ backgroundColor: preferredTheme }}>
      <div className="navbar">
        <div onClick={() => navigate('/')}>EVENTIFY</div>
      </div>
    </div>
  );
};

export default Navbar;
