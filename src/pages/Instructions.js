import React from 'react'
import { useNavigate } from 'react-router-dom';

function Instructions() {
    const navigate = useNavigate();
    return (
        <div className='instructions'>
            <div className='box'>
                <div className='card'>
                    <div className='number1'></div>                    
                    <img src='pink-card.png' alt='pink card' />
                    <img src='apple.png' alt='apple card' className='apple'/>
                    <h2>Select a pink card.</h2>
                    <p>It has images.</p>
                </div>
                <div className='card'>
                    <div className='number1 number2'>02</div>
                    <img src='blue-card.png' alt='blue card' />
                    <h2>Select a blue card.</h2>
                    <p>It has alphabets.</p>
                </div>
                <div className='card'>
                    <div className='number1 number3'>03</div>
                    <img src='cards.png' alt='cards' style={{marginTop:"5px",width:"11rem"}}/>
                    <p style={{marginBottom:"5px"}}>If they’re same</p>
                    <h2 style={{margin:"2px 12px 2px 25px"}}>Its a match !</h2>
                    <p>otherwise retry :(</p>
                </div>
            </div>
            <div className='bottom'></div>
            <button className='btn'>
                <img src='play.png' alt='play button' onClick={() => navigate('/play')} />
            </button>
            <button className='back' onClick={() => navigate('/next')}>
                <img src='back.png' alt='back button' />
            </button>
        </div>
    )
}

export default Instructions