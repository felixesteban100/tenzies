import React from 'react'
import './App.css';

function Die(props) {


    const one = (
        <div className={props.isHeld ? 'dice-held first-face' : 'dice first-face'}>
          <span className={props.isHeld ? 'dot-held' : 'dot'}> </span>
        </div>
    )

    const two = (
        <div className={props.isHeld ? 'dice-held second-face' : 'dice second-face'}>
          <span className={props.isHeld ? 'dot-held' : 'dot'}> </span>
          <span className={props.isHeld ? 'dot-held' : 'dot'}> </span>
        </div>
    )

    const three = (
        <div className={props.isHeld ? 'dice-held third-face' : 'dice third-face'}>
          <span className={props.isHeld ? 'dot-held' : 'dot'}> </span>
          <span className={props.isHeld ? 'dot-held' : 'dot'}> </span>
          <span className={props.isHeld ? 'dot-held' : 'dot'}> </span>
        </div>
    )

    const four = (
        <div className={props.isHeld ? 'dice-held fourth-face' : 'dice fourth-face'}>
            <div className="column">
                <span className={props.isHeld ? 'dot-held' : 'dot'}></span>
                <span className={props.isHeld ? 'dot-held' : 'dot'}></span>
            </div>
            <div className="column">
                <span className={props.isHeld ? 'dot-held' : 'dot'}></span>
                <span className={props.isHeld ? 'dot-held' : 'dot'}></span>
            </div>
        </div>
    )

    const five = (
        <div className={props.isHeld ? 'dice-held fifth-face' : 'fifth-face dice'}>
            <div className="column">
                <span className={props.isHeld ? 'dot-held' : 'dot'}></span>
                <span className={props.isHeld ? 'dot-held' : 'dot'}></span>
            </div>
            
            <div className="column">
                <span className={props.isHeld ? 'dot-held' : 'dot'}></span>
            </div>
            
            <div className="column">
                <span className={props.isHeld ? 'dot-held' : 'dot'}></span>
                <span className={props.isHeld ? 'dot-held' : 'dot'}></span>
            </div>
        </div>
    )

    const six = (
        <div className={props.isHeld ? 'dice-held fourth-face' : 'fourth-face dice'}>
            <div className="column">
                <span className={props.isHeld ? 'dot-held' : 'dot'}></span>
                <span className={props.isHeld ? 'dot-held' : 'dot'}></span>
                <span className={props.isHeld ? 'dot-held' : 'dot'}></span>
            </div>
            <div className="column">
                <span className={props.isHeld ? 'dot-held' : 'dot'}></span>
                <span className={props.isHeld ? 'dot-held' : 'dot'}></span>
                <span className={props.isHeld ? 'dot-held' : 'dot'}></span>
            </div>
        </div>
    )

    return (
    <div
        className={props.isHeld ? 'die-face-held' : 'die-face'}
        onClick={props.holdDice}
    >
        {props.mode ==="number" ? (<h2 className='die-num'>{props.value}</h2>) : 
            props.value === 1 ? one :
            props.value === 2 ? two :
            props.value === 3 ? three :
            props.value === 4 ? four :
            props.value === 5 ? five :
            props.value === 6 && six 
        }
    </div>
    )
}

export default Die