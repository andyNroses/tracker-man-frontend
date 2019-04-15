/* Modules */
import styled from 'styled-components';

const TextInput = styled.input`
    width: 100%;
    background: #FFFFFF;
    border: ${props => props.invalid ? '2px solid #ED6565' : '2px solid rgba(0, 0, 0, 0.1)'};
    box-sizing: border-box;
    border-radius: 7px;
    height: 45px;
    padding: 5px;
    padding-left: 15px;
    outline: none;
    margin-bottom: 8px;
    color: #50514F;
    font-size: 16px;

    ::placeholder {
        color: #CACACA;
    }
`;

export default TextInput;