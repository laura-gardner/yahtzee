import React, {useState} from "react";
import {nanoid} from "nanoid";
import Die from "./Die";

const Game = () => {

    const rollNewDie = () => {
        const diceValues = ['one', 'two', 'three', 'four', 'five', 'six'] 
        return {
          face: diceValues[Math.floor(Math.random()*6)],
          isHeld: false,
          id: nanoid()
        }
      }       

    const allNewDice = () => {
        const diceArray = [];
        for (let i=0; i<5; i++) {
          diceArray.push(rollNewDie())
        }
        return diceArray;
        }

    const [dice, setDice] = useState(allNewDice())

    const [isRolling, setIsRolling] = useState(false)

    const [rollsRemaining, setRollsRemaining] = useState(3)
    
    const roll = () => {
        setIsRolling(true)
        setTimeout(() => {
            setIsRolling(false)
        }, 1000)
        setDice(prevDice => prevDice.map(die => {
            return die.isHeld === true ?
            die : rollNewDie()
        }))
    }

    const holdDie = (id) => {
        setDice(prevDice => prevDice.map(die => {
          return die.id === id ? 
          {...die, isHeld: !die.isHeld} :
          die
        }))
      }
    

    const dieElements = dice.map(die => <Die 
                                            face={die.face}
                                            key={die.id} 
                                            isHeld={die.isHeld} 
                                            holdDie={() => holdDie(die.id)} 
                                        />)
   
    return (
        <div className="roll-dice-div">
        <h1 className="title">Yahtzee!</h1>
            <div className="dice-div">
                {dieElements}
            </div>
            <div className="button-div">
                <button onClick={roll} disabled={isRolling}>
                    {isRolling ? "Rolling..." : "Roll dice!"}
                </button>
            </div>
        </div>
    )
}

export default Game;