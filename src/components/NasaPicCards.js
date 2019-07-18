import React from 'react';
import styled from 'styled-components';

const NasaPicCard = styled.div`
display: flex;
//flex-direction: column;
justify-content: center;
`
const NasaPic = styled.img`
//max-height: 550px;
width: auto;
border-radius: 15px;
margin: 50px;
border: 1px red solid;
`
const PicDescription = styled.div`
display: flex;
flex-direction: column;
margin-right: 50px;
margin-left: 50px;
margin-top: 40px;
`

function NasaPicCards({title, date, explanation, url}) {
    return (
        <NasaPicCard>
            <NasaPic src={url} alt={title} />
            <PicDescription>
                <h2>{title}</h2>
                <h3>{date}</h3>
                <p>{explanation}</p>
            </PicDescription>
        </NasaPicCard>
    )
}
export default NasaPicCards;