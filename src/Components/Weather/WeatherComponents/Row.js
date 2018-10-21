import styled, {css} from 'styled-components';

const Row = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    p {
        font-size: 24px;
    }
    
    ${props => props.spec & css`
        width: 80%;
        margin: 0 auto;
        border: 2px solid black;
    `}
`;

export default Row;