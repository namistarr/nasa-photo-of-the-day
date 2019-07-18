import React from 'react';
import styled from 'styled-components';

const NasaPicCard = styled.div`
display: flex;
justify-content: center;
`
const NasaPic = styled.img`
max-height: 550px;
width: auto;
margin: 20px;
border: 1px red solid;
`
const PicDescription = styled.div`


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