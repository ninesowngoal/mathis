import React, { useState } from 'react'
import krakenCard from '../assets/anom_components/kraken_card.png'
import ultraCard from '../assets/anom_components/ultra_card.png'
import indiviliaCard from '../assets/anom_components/indivilia_card.png'
import harvesterCard from '../assets/anom_components/harvester_card.png'
import mirrorcontainerCard from '../assets/anom_components/mirror_container_card.png'
import addButton from '../assets/anom_components/add_button.png'
import "../styles/style.css"

const AnomalyCard = () => {
    const [selectedBoss, setSelectedBoss] = useState("kraken")
    // Switch card backgrounds based on boss selection
    const bossCards = {
        kraken: krakenCard,
        ultra: ultraCard,
        indivilia: indiviliaCard,
        harvester: harvesterCard,
        mirrorcontainer: mirrorcontainerCard,
    };

  return (
    <div>
      {/*Select boss dropdown*/}
      <select onChange={(e) => setSelectedBoss(e.target.value)} value={selectedBoss}>
        <option value="kraken">Kraken</option>
        <option value="ultra">Ultra</option>
        <option value="indivilia">Indivilia</option>
        <option value="harvester">Harvester</option>
        <option value="mirrorcontainer">Mirror Container</option>
      </select>
      {/*Damage calculation will be handled by backend*/}
      <div className='damage-text'>
        0
      </div>
      <div className='card-container'>
        <img src={bossCards[selectedBoss]} alt='Boss Card' className='card-image'/>
        <img src={addButton} alt="Add Button" className="add-button-1" />
        <img src={addButton} alt="Add Button" className="add-button-2" />
        <img src={addButton} alt="Add Button" className="add-button-3" />
        <img src={addButton} alt="Add Button" className="add-button-4" />
        <img src={addButton} alt="Add Button" className="add-button-5" />
      </div>
    </div>
  )
}

export default AnomalyCard