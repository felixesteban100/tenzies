import './App.css';
import Die from './Die.js'
import React from 'react';
import {nanoid} from "nanoid"
import Confetti from "react-confetti"

function App() {
  
  const [die, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)
  const [mode, setMode] = React.useState("dots")
  const [rollTimes, setRollTimes] = React.useState(0)

  React.useEffect(() => {
    const allHeld = die.every(die => die.isHeld);
    const firstValue = die[0].value;
    const allSameValue = die.every(die => die.value === firstValue)

    if(allHeld && allSameValue){
      setTenzies(true)
    }
  }, [die])

  function generateNewDice(){
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  }

  function allNewDice(){
    const newDice = []
    for(let i = 0; i < 10; i++){
      newDice.push(generateNewDice())
    }
    return newDice
  }

  function rollDice(){
    if(!tenzies){
      setDice(oldDice => oldDice.map((die) => {
        return die.isHeld ?
        die :
        generateNewDice()
      }))
      setRollTimes(prev => prev += 1)
    } else{
      setTenzies(false)
      setDice(allNewDice())
      setRollTimes(0)
    }
    
  }

  function holdDice(id){
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ?
      {...die, isHeld: !die.isHeld} :
      die
    }))
  }

  function changeMode(){
    setMode(prev => prev==="dots" ? "number" : "dots")
  }

  const diceElements = die.map(die => (
    <Die 
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
      mode={mode}
    />
  ))

  return (
    <div className='box'>
      <div className='top'>
        <button 
            className="mode" 
            onClick={changeMode}
        >
            {mode==="number" ? "Change to dots" : "Change to number"}
        </button>

        <div className='counter'>
          <h2>Number of rolls: {rollTimes}</h2>
        </div>
      </div>

      <main>
      {
        tenzies && 
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
        />
      }
      <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. 
            Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <button 
                className="roll-dice" 
                onClick={rollDice}
            >
                {tenzies ? "New Game" : "Roll"}
            </button>
    </main>
    </div>
  );
}

export default App;
