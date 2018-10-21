import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-family: "Loved by the king";
    min-width: 30%;
    background: #f7f7f7;
    border: 2px solid black;
    border-radius: 4px;
    
    @media (max-width: 950px) {
        margin-bottom: 30px;
    }
`;

export default Wrapper;