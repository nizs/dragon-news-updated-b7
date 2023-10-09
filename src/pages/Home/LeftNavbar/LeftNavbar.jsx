import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EditorsInsight from '../EditorsInsight/EditorsInsight';


const LeftNavbar = () => {
    const [categories, setCategories] = useState([]);
    const [insights, setInsights] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, []);
    
    useEffect(() => {
    fetch('../../../../public/data/insight.json')
            .then(res => res.json())
            .then(data => setInsights(data))
            .catch(error => console.error(error))
    }, []);

    return (
        <>
            <div className='p-2'>
                <h6 className='mb-4'>Category</h6>
                <h4 className='mb-4 bg-danger p-2 text-white'>Latest</h4>
                {
                    categories.map(category => <p
                        key={category.id}
                    > <Link className='text-decoration-none text-secondary' to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div >
            <div className='mt-5'>
                <Container>
                    <Row>
                        <Col>
                            {
                                insights.map(inst => <EditorsInsight
                                    key={inst.id}
                                    inst={inst}
                                ></EditorsInsight>)
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default LeftNavbar;