/* Modules */
import styled from 'styled-components';

const Button = styled.div`
    background-color: ${props => props.disabled ? '#999999' : props.color};
    color: ${props => props.disabled ? '#B2B2B2' : 'white'};
    border-radius: 7px;
    height: 45px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    margin-bottom: 8px;
    cursor: ${props => props.disabled ? 'initial' : 'pointer'};
`;

export default Button;