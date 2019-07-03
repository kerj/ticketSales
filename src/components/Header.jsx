import React from 'react';
import Selfie from './../img/selfie.jpg';
import { Link } from 'react-router-dom';


function Header() {
  var headerStyles = {
    borderBottom: '2px solid lightgrey',
    height: '400px',
    backgroundImage: `url(${Selfie})`,
    backgroundSize: '100% 400px'
  };
  return (
    <div style={headerStyles}>
      <Link to="/"> <h2>Click to go home</h2></Link>
    </div>
  );
}

export default Header;