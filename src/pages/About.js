import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div className='container'>
      <Header />
        <main className='main-content'>
          <h2>ABOUT</h2>
          <div className='about-box'>
            <p className='about-text'>
              Mathis is a website for Nikke players.
            </p>
          </div>
        </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default About