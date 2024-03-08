import React from 'react'
import { useNavigate } from 'react-router-dom'

function Intro() {
  const navigate = useNavigate();
  return (
    <div className='container'>
      <div className='bubble bubble-bottom-left'>
        <h1>Welcome Kiddo !</h1>
      </div>
      <div className='bubble shadow'>
      </div>
      <button className='btn' onClick={()=>navigate('/start')}>
        <img src='start.png' alt='start button' />
        </button>
    </div>
  )
}

export default Intro