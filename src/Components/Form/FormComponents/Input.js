import styled from 'styled-components'

const Input = styled.input`
    font-size: 32px;
    outline: none;
    padding: 20px 30px;
    border: 3px solid black;
    border-right: none; 
    
    @media (max-width: 660px) {
        max-width: 200px;
    }
    
    @media (max-width: 460px) {
        max-width: 140px;
    }
`;

export default Input;
