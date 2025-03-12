import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Deficit = () => {
  const [stageCP, setStageCP] = useState("");
  const [yourCP, setYourCP] = useState("");

  // Calculate CP Difference %
  const cpDifference = stageCP && yourCP ? ((yourCP / stageCP) * 100).toFixed(2) : "—";
  
  // Calculate Stat Penalty %
  let statPenalty;
  if (cpDifference >= 100) {
    statPenalty = "0% (No Penalty)";
  } else if (cpDifference >= 90) {
    statPenalty = "10%";
  } else if (cpDifference >= 80) {
    statPenalty = "20%";
  } else {
    statPenalty = "Severe Penalty";
  }
  return (
    <div className='container'>
      <header>
        <Header />
      </header>
      <div className="deficit-page">
        <div className='deficit-container'>
        <h3>Deficit Calculator</h3>

        <div className="input-group">
          <label>Stage CP:</label>
          <input type="number" value={stageCP} onChange={(e) => setStageCP(e.target.value)} />
        </div>

        <div className="input-group">
          <label>Your CP:</label>
          <input type="number" value={yourCP} onChange={(e) => setYourCP(e.target.value)} />
        </div>

        <div className="result-box">
          <p><strong>CP Difference:</strong> {cpDifference}%</p>
          <p><strong>Stat Penalty:</strong> {statPenalty}</p>
        </div>
        </div>
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Deficit