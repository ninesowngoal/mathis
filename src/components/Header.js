import React from 'react';
import Logo from './Logo';
import TextLink from './TextLink';

const Header = () => {
  return (
    <div className="head-container">
      <header className="logo">
        <Logo />
      </header>
      <menu className='page-title'>
        <TextLink text='HOW TO USE' Link to='/usage' />
        <TextLink text='ABOUT' Link to='/about' />
      </menu>
    </div>
  );
};

export default Header;
