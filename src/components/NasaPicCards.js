import React from 'react';

function NasaPicCards({title, date, explanation, url}) {
    return (
        <div className='nasa-pic-card'>
            <img className='nasa-pic' src={url} />
            <div className='about-pic'>
                <h2>{title}</h2>
                <h3>{date}</h3>
                <p>{explanation}</p>
            </div>
        </div>
    )
}
export default NasaPicCards;