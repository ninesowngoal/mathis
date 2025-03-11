import React from 'react';
import Logo from './Logo';
import TextLink from './TextLink';

const Header = () => {
  return (
    <div className="barcontainer">
      <header className="logocontainer">
        <Logo />
      </header>
      <menu className="textcontainer">
        <TextLink text='HOW TO USE' Link to='/usage' />
        <TextLink text='ABOUT' Link to='/about' />
      </menu>
    </div>
  );
};

export default Header;
