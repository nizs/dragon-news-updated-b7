import React from 'react';
import DragonNavigation from '../../src/pages/shared/DragonNavigation/DragonNavigation';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
const LoginLayout = () => {
    return (
        <div className='bg-secondary-subtle py-2'>
            <Container>
                <DragonNavigation></DragonNavigation>
                <Outlet></Outlet>
            </Container>
        </div>
    );
};

export default LoginLayout;