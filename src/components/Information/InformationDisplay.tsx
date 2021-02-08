import React, { useEffect, useState } from 'react';

import './InformationDisplay.css';

const InformationDisplay = (props:any) => {

  const [currentState, setCurrentState] = useState(
    {
      name: '',
      capital:'', 
      population:'',
      largestCity: '',
      flag: ''});

  useEffect(() => {
    setCurrentState(props.currentState)
  }, [props.currentState])

  if(currentState.capital) {
    return (
      <div className="Display">
        <h2>{currentState.name}</h2>
        <img className="Flag" src={currentState.flag.replace(/16px|19px|20px|21px|22px|23px/, "250px")}/>
        <h3>Capital: {currentState.capital}</h3>
        <h3>Population: {currentState.population.toLocaleString()}</h3>
        <h3>Largest City: {currentState.largestCity}</h3>
      </div>
    )
  } else {
  return <div className="Display"></div>
  }
}

export default InformationDisplay
