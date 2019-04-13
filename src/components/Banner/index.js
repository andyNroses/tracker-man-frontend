/* Modules */
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    height: 50%;
    width: 100%;
    background-color: ${props => props.theme.primary};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.div`
    text-align: center;
    color: white;
    h1  {
        font-family: 'Luckiest Guy', cursive;
        font-stretch: expanded;
        text-transform: uppercase;
        font-size: 60px;
        margin: 0;
    }
    p {
        margin: 0;
    }
`;

const Banner = () => {
    return (
        <Container>
            <Title>
                <h1>Tracker-Man</h1>
                <p>Keep track of your comic books readings!</p>
            </Title>
        </Container>
    );
}

export default Banner;