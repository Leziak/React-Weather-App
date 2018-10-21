import styled, {css} from 'styled-components';

const Button = styled.button`
    color: black;
    font-family: Loved by the King
    background: #efe6eb;
    border: 3px solid black;
    border-left: 1px solid grey;
    font-size: 32px;
    padding: 10px 40px;
    outline: none;
    
    ${props => props.retry && css`
        border-left: 3px solid black;
        margin-top: 10px;
    `}
`;

export default Button;
