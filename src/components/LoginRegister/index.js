/* Modules */
import React, { useState } from 'react';
import styled from 'styled-components';
import Login from './Login';
import Register from './Register';

const Container = styled.div`
    width: 400px;
    padding: 20px;
    padding-left: 30px;
    padding-right: 30px;
    background: #F2F2F2;
    box-shadow: 0px 4px 15px rgba(101, 101, 101, 0.25);
    border-radius: 20px;
    position: absolute;
    left: 0; right: 0;
    top: 40%;
    margin: auto;
`;

const Tabs = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding-bottom: 10px;
`;

const Tab = styled.span`
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
    color: ${props => props.active ? '#50514F' : 'CACACA' };
    position: relative;
    ::before {
        content: "";
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: ${props => props.active ? '#50514F' : 'CACACA' };
        position: absolute;
        top: 0; bottom: 0;
        left: ${props => props.left ? '-15px' : 'none' };
        right: ${props => props.right ? '-15px' : 'none' };
        margin: auto;
    }
`;

const LoginRegister = () => {
    const [active, setActive] = useState('login');
    const Content = active == 'login' ? Login : Register;
    return (
        <Container>
            <Tabs>
                <Tab left active={active == 'login'} onClick={() => setActive('login')}>Login</Tab>
                <Tab right active={active == 'register'} onClick={() => setActive('register')}>Register</Tab>
            </Tabs>
            <Content />
        </Container>
    );
}

export default LoginRegister;