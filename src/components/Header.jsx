import React from 'react';
import Selfie from './../img/selfie.jpg';

function Header() {
  var headerStyles = {
    borderBottom: '2px solid lightgrey',
    height: '400px',
    backgroundImage: `url(${Selfie})`,
    backgroundSize: '100% 400px'
  };
  return (
    <div style={headerStyles}>
            I am a header
    </div>
  );
}

export default Header;