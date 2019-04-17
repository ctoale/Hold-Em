import React from 'react';
import Card from './Card';

function PokerHand(props){
    let hand = props.cards.map((card)=>{
        return <Card card={card}/>
    })
    return(
        <div className="col-sm-12">
            {hand}
        </div>
    )
}

export default PokerHand