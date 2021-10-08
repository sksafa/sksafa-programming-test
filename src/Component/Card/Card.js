import React, { useEffect, useState } from 'react';
import CardItem from './CardItem';

const Card = () => {
    const [ card, setCard  ] = useState([]);

    useEffect( () => {
        fetch('https://api.spacexdata.com/v3/launches')
        .then(res => res.json())
        .then(data => setCard(data))
        
    }, [])
    console.log(card)
    console.log(card.length)
  
    return (
        <div>
            <div className="container">
                <div className="row">
                    {
                        card.map(card=> <CardItem card={card}></CardItem> )
                        
                    }
                </div>
            </div>
        </div>
    );
};

export default Card;