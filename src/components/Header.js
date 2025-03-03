import React from 'react'

const Header = () => {
  return (
    <div className='barcontainer'>
      <header className='logocontainer'>
        <img src='/images/logo.png' alt='Mathis logo'/>
        <menu className='textcontainer'>
          <p>How To Use</p>
          <p>About</p>
        </menu>
      </header>
    </div>
  )
}

export default Header