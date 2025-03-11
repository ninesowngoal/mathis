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
              Mathis is a website built for Nikke players who wish to optimise their gameplay or want to see
              an estimate of the damage their team is capable of through the use of the tools that are available
              on this website.
              <br/><br/>
              The main aim of this website is to hopefully make teambuilding easier by showing the theoretical
              damage a team may make to a certain target. This will lessen the need to use mock battle for each
              composition, but it will not take away the need outright. For instance, if a player wished to use
              a squad that consists of Liter, Crown, Scarlet, Alice and Naga against Kraken in Anomaly Interception,
              the player may know if its a good team or not by looking at the projected damage given. This would
              also indicate whether a player is able to hit the next reward threshold or if they are close to it.
              <br/><br/>
              © All rights to Goddess of Victory: Nikke game assets used on the website are reserved by Shift Up
              corporation and Tencent. Other properties belong to their respective owners.
              <br/>
              <hr/>
              Contact Me:
              contact.ninesowngoal@gmail.com </p> 
          </div>
        </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default About