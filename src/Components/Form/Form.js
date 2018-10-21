import React from 'react';

import Input from './FormComponents/Input.js';
import Button from './FormComponents/Button.js';
import Wrapper from './FormComponents/Wrapper.js';


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




export default form;