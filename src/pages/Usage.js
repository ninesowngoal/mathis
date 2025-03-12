import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Usage = () => {
  return (
    <div className='container'>
        <header>
            <Header />
        </header>
        <main className='main-content'>
        <h2>USAGE</h2>
        <div className='about-box'>
          <div className='about-text'>
            <p>
            Mathis is a tool that allows you to calculate your theoretical damage to
            anomalies and calculate your stage penalty.<br/></p>
            <p>
              ‣ Select the option you want - Anomaly or Stage penalty<br/>
              ‣ Follow instructions below for the option you selected.<br/>
            </p>
            <p>
              Anomaly<hr/>
            </p>
            <p>
            ‣ Click on the dropdown list and select the Anomaly you wish.<br/>
            ‣ Click on the + buttons and select your Nikke.<br/>
            ‣ Input the stats listed for each one.<br/>
            Mathis will automatically calculate the total theoretical damage dealt to the target.
            </p>
            <p>Stage Penalty<hr/></p>
            <p>
              ‣ Input the stage's recommended CP requirement.<br/>
              ‣ Input your squad's CP. <br/>
              Mathis will calculate your stage penalty.
            </p>
          </div>
        </div>
      </main>
        <footer>
          <Footer/>
        </footer>
    </div>
  )
}

export default Usage