import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/Sidebar.css";

const Sidebar = () => {
    return (
      <aside className="sidebar">
        <nav>
          <ul>
            <li><Link to="/"><i className="fas fa-home"></i> Home</Link></li>
            <li><Link to="/profile"><i className="fas fa-user"></i> Profile</Link></li>
            <li><Link to="/notifications"><i className="fas fa-bell"></i> Notifications</Link></li>
            <li><Link to="/settings"><i className="fas fa-cog"></i> Settings</Link></li>
          </ul>
        </nav>
      </aside>
    );
  };

export default Sidebar;
