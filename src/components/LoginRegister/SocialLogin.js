/* Modules */
import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 8px;
`;

const SocialLogin = () => {
    return (
        <Container>
            <Button color='#247BA0'>Facebook</Button>
            <Button color='#79B473'>Google</Button>
        </Container>
    );
}

export default SocialLogin;