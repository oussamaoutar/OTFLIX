import React from 'react';
import './button.css';
import { Link } from 'react-router-dom';

function Button({handleLoggedIn, loggedIn, icon, name, bgColor = '#130912', color= '#ffffff'}) {
  return (
    <div>
        <Link to={loggedIn ? "/home" : "/login"} onClick={() => handleLoggedIn(loggedIn)} className="mainBtn" style={{backgroundColor: bgColor, color}}>
            {icon} {name}
        </Link>
    </div>
  )
}

export default Button