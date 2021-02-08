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
        <img className="Flag" src={currentState.flag} />
        <p>Name: {currentState.name}</p>
        <p>Capital: {currentState.capital}</p>
        <p>Population: {currentState.population}</p>
        <p>Largest City: {currentState.largestCity}</p>
      </div>
    )
  } else {
  return <div className="Display"></div>
  }
}

export default InformationDisplay