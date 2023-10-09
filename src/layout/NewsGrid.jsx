import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftNavbar from '../pages/Home/LeftNavbar/LeftNavbar';
import RightNavbar from '../pages/Home/RightNavbar/RightNavbar';


const NewsGrid = () => {
    return (

        <Container className='px-2 mt-4'>
            <Row>
                <Col lg={9}><p className='text-center'><Outlet /></p></Col>
                <Col lg={3}>
                    <RightNavbar></RightNavbar>
                </Col>
            </Row>
        </Container>

    );
};

export default NewsGrid;