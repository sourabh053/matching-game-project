import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SingleCard from '../components/SingleCard';

const pCards = [{ 'src': 'apple-card.png', 'matched': false ,'type': 'pink'},
{ 'src': 'orange-card.png', 'matched': false ,'type': 'pink'},
{ 'src': 'cherries.png', 'matched': false ,'type': 'pink'},
{ 'src': 'lemon.png', 'matched': false ,'type': 'pink'},
{ 'src': 'grapes.png', 'matched': false ,'type': 'pink'},
{ 'src': 'watermelon.png', 'matched': false ,'type': 'pink'},
];
const bCards = [{ 'src': 'a-card.png', 'matched': false ,'type': 'blue'},
{ 'src': 'o-card.png', 'matched': false ,'type': 'blue'},
{ 'src': 'c-card.png', 'matched': false ,'type': 'blue'},
{ 'src': 'l-card.png', 'matched': false ,'type': 'blue'},
{ 'src': 'g-card.png', 'matched': false ,'type': 'blue'},
{ 'src': 'w-card.png', 'matched': false ,'type': 'blue'},
];


function Activity() {
    const [pinkCards, setPinkCards] = useState([]);
    const [blueCards, setBlueCards] = useState([]);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
    const [filled, setFilled] = useState(0);
    const overlayRef = useRef(null);
    const navigate = useNavigate();
    const shufflePinkCards = () => {
        const shuffledPinkCards = [...pCards]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }));
        setPinkCards(shuffledPinkCards);
    }
    const shuffleBlueCards = () => {
        const shuffledBlueCards = [...bCards]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }));
        setBlueCards(shuffledBlueCards);
    }

    const handleChoice = (card) => {
        // console.log(card);
        if(card.type === 'pink' && choiceOne === null){
            setChoiceOne(card);
        }
        if(card.type === 'blue' && choiceOne !== null){
            setChoiceTwo(card);
        }
    }
    const resetTurn = () => {
        setChoiceOne(null);
        setChoiceTwo(null);
    }

    const goToFinal = () =>{
        setTimeout(() => {
            navigate('/final');
        }, 1000);
    }

    useEffect(() => {
        if (choiceOne && choiceTwo) {
            if (choiceOne.src.charAt(0) === choiceTwo.src.charAt(0)) {
                setPinkCards((prev) => {
                    return prev.map((card) => {
                        if (card.src === choiceOne.src) {
                            return { ...card, matched: true };
                        } else {
                            return card;
                        }
                    })
                });
                setBlueCards((prev) => {
                    return prev.map((card) => {
                        if (card.src === choiceTwo.src) {
                            return { ...card, matched: true };
                        } else {
                            return card;
                        }
                    })
                });
                setFilled((prev)=>{
                    if(prev+17 > 100) goToFinal();
                    return prev+17
                });
                overlayRef.current.style.display = 'flex';
                setTimeout(()=>{resetTurn()},1000);
            } else {
                setTimeout(()=>{resetTurn()},1000);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [choiceOne, choiceTwo]);

    useEffect(() => {
        shufflePinkCards();
        shuffleBlueCards();
        setFilled(0);
    }, []);


    return (
        <div className='instructions'>
                {choiceOne && choiceTwo && (<div className='overlay lay' ref={overlayRef}>
                    <h1>It’s a match !</h1>
                    <div style={{transform:"rotate(-10deg)"}}>
                        <img src={choiceOne.src} alt='apple card' style={{width:"10rem"}}/>
                    </div>
                    <div style={{transform:"rotate(10deg)"}}>
                        <img src={choiceTwo.src} alt='apple card' style={{width:"10rem"}}/>
                    </div>
                </div>)}
            <div className='cards-container'>
            <img src='banana.png' alt='banana' className='banana ana'/>
                <div className='progress-bar'>
                    <div style={{
                        height:"100%",
                        width: `${filled}%`,
                        background : 'linear-gradient(0deg, #FFCF25, #FFCF25),linear-gradient(0deg, #FFCF25, #FFCF25),linear-gradient(0deg, #FFCF25, #FFCF25)',
                        transition: "width 0.5s"                      
                    }}></div>
                </div>
                <div className='pink-card-grid'>
                    {pinkCards.map((card) => (
                        <SingleCard key={card.id}
                            card={card} handleChoice={handleChoice}
                            flipped= {card === choiceOne || card.matched} />
                    ))}
                </div>
                <div className='blue-card-grid'>
                    {blueCards.map((card) => (
                        <SingleCard key={card.id}
                            card={card} handleChoice={handleChoice} 
                            flipped= {card === choiceTwo || card.matched}/>
                    ))}
                </div>
            </div>
            <button className='back' onClick={() => navigate('/yes')}>
                <img src='back.png' alt='back button' />
            </button>
        </div>
    )
}

export default Activity