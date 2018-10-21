import styles, {css} from 'styled-components';

const DisplayWrapper = styles.div`
    margin: 0 auto;
    width: 70%;
    
    @media (max-width: 1400px) {
        width: 95%;
    }
    
    ${props => props.flex && css`
        display: flex;
        justify-content: space-around;
        
        @media (max-width: 950px) {
            flex-direction: column;
            max-width: 60%;
        }
        
        @media (max-width: 550px) {
            max-width: 80%;
        }
    `}
`;

export default DisplayWrapper;