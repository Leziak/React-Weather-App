import React from 'react';
import styled from 'styled-components';

import Input from './FormComponents/Input.js';
import Button from './FormComponents/Button.js';


const form = (props) => {
    return (
        <div>
            <form onSubmit={props.submit}>
                <Wrapper>
                    <Input/>
                    <Button type={"submit"}>Submit!</Button>
                </Wrapper>
            </form>
        </div>
    )
};


const Wrapper = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center; 
`;


export default form;