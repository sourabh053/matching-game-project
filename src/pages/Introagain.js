import React from 'react'
import { useNavigate } from 'react-router-dom';

function Introagain() {
  const navigate = useNavigate();
    return (
        <div className='container'>
            <div className='bubble bubble-bottom-left'>
                <h1>Hi , I am Mizo !
                    and I love bananas 
                <img src='banana.png' alt='banana' className='banana1'/>
                </h1>
            </div>
            <div className='bubble shadow' style={{height:"96px"}}>
            </div>
            <button className='btn' onClick={()=>navigate('/next')}>
                <img src='next.png' alt='start button' />
            </button>
            <button className='back' onClick={()=>navigate('/')}>
                <img src='back.png' alt='back button' />
            </button>
        </div>
    )
}

export default Introagain