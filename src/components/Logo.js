import React from 'react';

import logo from './img/nasa-logo.png';

const Logo = () => {
  return (
    <div className='logo-container'>
      <img className='logo' src={logo} alt='Nasa logo' />
    </div>
  );
};

export default Logo;