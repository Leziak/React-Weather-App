import React from 'react';
import styled, {css} from 'styled-components';

const Button = styled.button`
    border-radius: 10px;
    color: black;
    background: red;
    border: 3px solid black;
    font-size: 20px;
    padding: 20px 40px;
    outline: none;
     
    ${props => props.primary && css`
        background: black;
        color: red;
        border: 3px solid red;
    `}
`;

export default Button;
