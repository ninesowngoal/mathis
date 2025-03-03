import React from 'react';
import Logo from './Logo';

const Header = () => {
  return (
    <div className="barcontainer">
      <header className="logocontainer">
        <Logo />
      </header>
      <menu className="textcontainer">
        <p>How To Use</p>
        <p>About</p>
      </menu>
    </div>
  );
};

export default Header;
