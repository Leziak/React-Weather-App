import React from 'react';
import styled from 'styled-components';


const hero = () => {
    return (
        <div>
            <WelcomeHeader>Inventi Weather App!</WelcomeHeader>
            <WelcomeParagraph>Enter a city.</WelcomeParagraph>
        </div>
    )
}

const WelcomeHeader = styled.h1`
    color: #2D2E37;
    font-family: "Loved by the king";
    font-size: 32px;
`;

const WelcomeParagraph = styled.p`
    color: #2D2E37;
    font-size: 18px;
`;

export default hero;
