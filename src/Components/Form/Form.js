import React, {Component} from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Input from './FormComponents/Input.js';
import Button from './FormComponents/Button.js';

class Form extends Component {
    state = {
        city: ''
    }

    componentDidMount(){
        console.log(this.state.city);
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <Wrapper>
                        <Input/>
                        <Button type={"submit"}>Submit!</Button>
                    </Wrapper>
                </form>
            </div>
        )
    }
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 30%;
    margin: 0 auto;
`


export default Form;