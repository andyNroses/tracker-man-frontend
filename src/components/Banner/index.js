/* Modules */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
        font-size: 80px;
        margin: 0;
    }
    p {
        margin: 0;
    }
`;

const Links = styled.div`
    position: absolute;
    top: 20px;
    left: ${props => props.position == 'left' ? '30px' : 'none' };
    right: ${props => props.position == 'right' ? '30px' : 'none' };
    display: flex;
    align-items: center;
    a {
        text-decoration: none;
        color: rgba(242, 242, 242, 0.6);
        margin-left: ${props => props.position == 'left' ? 'none' : '20px' };
        margin-right: ${props => props.position == 'right' ? 'none' : '20px' };
        font-size: 18px;
    }
`;

const Banner = () => {
    return (
        <Container>
            <Title>
                <h1>Tracker-Man</h1>
                <p>Keep track of your comic books readings!</p>
            </Title>
            <Links position='left'>
                <a target="_blank" href='https://www.marvel.com/comics/series'>Marvel Unlimited</a>
                <Link to='/features'>Features</Link>
            </Links>
            <Links position='right'>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </Links>
        </Container>
    );
}

export default Banner;