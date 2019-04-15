/* Modules */
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0; top: 0;
    background-color: #F2F2F2;
`;

const AppLoader = () => {
    return (
        <Container>
        </Container>
    );
}

export default AppLoader;