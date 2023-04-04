import React from "react";

const Die = ({face, rolling, isHeld, holdDie}) => {
    return (
        <div onClick={holdDie}>
           <i className={`die fas fa-dice-${face} fa-3x ${rolling && "rolling"} ${isHeld && "die-held"}`}></i> 
        </div>
        
    )

}

export default Die;