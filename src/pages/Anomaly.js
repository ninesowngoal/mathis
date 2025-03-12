import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import "../styles/style.css"
import AnomalyCard from '../components/AnomalyCard'

const Anomaly = () => {
  return (
    <div className='container'>
      <header>
        <Header />
      </header>
      <div>
        <AnomalyCard/>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Anomaly