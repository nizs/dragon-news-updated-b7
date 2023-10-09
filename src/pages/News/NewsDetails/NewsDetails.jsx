import React, { useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { HiArrowLeft } from "react-icons/hi";
import CardGroup from 'react-bootstrap/CardGroup';
import EditorsInsight from '../../Home/EditorsInsight/EditorsInsight';

const NewsDetails = () => {
    const NewsDetails = useLoaderData();
    const { title, image_url, details, category_id } = NewsDetails;
    const [insights, setInsights] = useState([]);

    useEffect(() => {
        fetch('../../../../public/data/insight.json')
            .then(res => res.json())
            .then(data => setInsights(data))
            .catch(error => console.error(error))
    }, []);
    return (
        <>
            <Card className='p-4'>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title className='text-start'>{title}</Card.Title>
                    <Card.Text className='text-start mb-5'>
                        {details}
                    </Card.Text>
                    <Link className='text-decoration-none' to={`/category/${category_id}`}><Button className='d-block text-start rounded-0 ' variant="danger"> <HiArrowLeft className='me-2' />All News In this Catgory</Button></Link>
                </Card.Body>
            </Card>
            <div className='mt-5'>
                <h2 className='mt-4 text-start mb-0 text-secondary fs-4'>Editors Insight</h2>
                <CardGroup className='gap-4 mt-3'>
                    {
                        insights.map(inst => <EditorsInsight
                            key={inst.id}
                            inst={inst}
                        ></EditorsInsight>)
                    }
                </CardGroup>
            </div>
        </>
    );
};

export default NewsDetails;