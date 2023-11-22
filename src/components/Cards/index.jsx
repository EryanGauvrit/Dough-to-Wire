import surprises from '../../datas/surprises.json';
import cardVerso from '../../assets/card-verso.png';
import { useState } from 'react';

export const Cards = () => {
    const [openCard, setOpenCard] = useState(false);
    const [cardContent, setCardContent] = useState({});

    const randomChoose = (tab) => {
        const randomIndex = Math.floor(Math.random() * tab.length);

        return tab[randomIndex];
    }

    const handleClick = () => {
        const card = randomChoose(surprises);
        setCardContent(card);
        setOpenCard(!openCard);
    }

    return (
        <div className='cards-bloc'>
            <div className='deck' onClick={handleClick}>
                <img src={cardVerso} alt='surpise card verso' />
                <img src={cardVerso} alt='surpise card verso' />
                <img src={cardVerso} alt='surpise card verso' />
                <img src={cardVerso} alt='surpise card verso' />
                <img src={cardVerso} alt='surpise card verso' />
            </div>
            <div className={`card ${openCard ? 'openCard' :'closeCard'}`}>
                <div className={`showCard` } >
                    <span className='closeButton' onClick={handleClick}>+</span>
                    <div>
                        <h1>{cardContent.isBonus ? 'BONUS' : 'PENALTY'}</h1>
                        <p>{cardContent.content}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}