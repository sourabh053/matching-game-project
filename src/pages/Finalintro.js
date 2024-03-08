import React from 'react'
import { useNavigate } from 'react-router-dom';

function Finalintro() {
  const navigate = useNavigate();
    return (
        <div className='container'>
            <div className='bubble bubble-bottom-left'>
                <h1>Can you help me get some ? 🤔</h1>
            </div>
            <div className='bubble shadow'>
            </div>
            <button className='btn'>
                <img src='yes.png' alt='start button' onClick={()=>navigate('/yes')}/>
            </button>
            <button className='back' onClick={()=>navigate('/start')}>
                <img src='back.png' alt='back button' />
            </button>
        </div>
    )
}

export default Finalintro