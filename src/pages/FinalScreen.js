import React from 'react'
import { useNavigate } from 'react-router-dom'

function FinalScreen() {
    const navigate = useNavigate();
  return (
    <div className='instructions'>
        <div className='overlay'></div>
    <div className='progress-bar bar'>
    </div>
    <img src='banana.png' alt='banana' className='banana'/>
    <img src='banana.png' alt='banana' className='banana' 
    style={{top:"25%",right:"28%" ,transform:"rotateZ(10deg)"}}/>
    <img src='banana.png' alt='banana' className='banana'
    style={{top:"20%",left:"25%" ,transform:"rotateZ(12deg)"}}/>
    <img src='banana.png' alt='banana' className='banana'
    style={{top:"60%",left:"20%" ,transform:"rotateZ(70deg)"}}/>
    <img src='banana.png' alt='banana' className='banana'
    style={{top:"60%",right:"25%" ,transform:"rotateZ(330deg)"}}/>
    <img src='banana.png' alt='banana' className='banana'
    style={{top:"40%",right:"20%" ,transform:"rotateZ(335deg)"}}/>
    <img src='smile.png' alt='banana' className='smile'/>
    <img src='reward.png' alt='banana' className='reward'/>
    <button className='invi' onClick={()=>navigate('/')}></button>
    <button className='back' onClick={()=>navigate('/play')}>
        <img src='back.png' alt='back button' />
    </button>
</div>
  )
}

export default FinalScreen