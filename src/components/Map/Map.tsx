import React, { useState } from 'react'
import MapChart from './MapChart'
import InformationDisplay from '../information/InformationDisplay'
import { getData } from './dataGetter'

import './Map.css';

const Map = () => {

  const [currentState, setCurrentState] = useState({})

  const getStateDetails = async (id:string) => {
    let data = await getData(id, 'Usstatesdataset_States')
    setCurrentState(data)
  }

  return (
    <div className="Map">
      <MapChart handler={getStateDetails}/>
      <InformationDisplay currentState={currentState}/>
    </div>
  )
}

export default Map;