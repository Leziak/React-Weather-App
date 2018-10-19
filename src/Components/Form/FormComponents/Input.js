import React from 'react';
import styled from 'styled-components'

const input = (props) => {
    return (
        <Input placeholder={props.placeholder} type="text"/>
    )
    
};

const Input = styled.input`
    font-size: 20px;
    border-radius: 1px;
    outline: none;
    padding: 10px 20px;
`;

export default input;
