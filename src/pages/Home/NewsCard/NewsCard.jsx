import React from 'react';
import { Card, Button, Figure } from 'react-bootstrap';
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { HiOutlineShare } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { HiEye } from "react-icons/hi";

const NewsCard = ({ cnews }) => {
    const { _id, title, details, image_url, author, total_view } = cnews;
    return (
        <Card className="text-center mb-5">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                    <Figure className='roundedCircle mb-0'>
                        <Figure.Image
                            className='mb-0'
                            width={40}
                            height={40}
                            alt="50x50"
                            src={author.img}
                            roundedCircle
                        />
                    </Figure>

                    <div className='ms-2'>
                        <p className='text-start mb-0 fw-bold'>{author.name}</p>
                        <p className='mb-0 text-secondary'>{author.published_date}</p>
                    </div>
                </div>
                <div className='d-flex'>
                    <MdOutlineBookmarkBorder className='me-2' />
                    <HiOutlineShare />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img className='my-3' variant="top" src={image_url} />
                <Card.Text>
                    {details.length < 250 ? <>{details}</> :
                        <>{details.slice(0, 250)} ...<Link className='text-secondary fw-semi-bold text-decoration-none' to={`/news/${_id}`}>Read More</Link></>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                    
                </div>
                <div className='d-flex align-items-center'>
                    <HiEye className='me-2 text-secondary fs-5' />
                    <span>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;