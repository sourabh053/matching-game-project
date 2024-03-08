import React from 'react'

function SingleCard({card, handleChoice, flipped}) {
    function handleClick(){
        handleChoice(card);
    }
    return (
        <div className={card.matched ? 'pcard vanish' :'pcard'}>
            <div className={flipped ? 'img-container flipped' : 'img-container'}>
                <img className='front' src={card.src} alt='card front' />
                <img className='back' src={(card.type === 'pink') ?'/pink-card.png': './blue-card.png'}
                onClick={handleClick}
                 alt='card back' />
            </div>
        </div>
    )
}

export default SingleCard