import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, } from "react-icons/fa6";
import Qzone from '../../shared/Qzone/Qzone';
import RaightNavBanner from '../../shared/RightNavBanner/RaightNavBanner';

const RightNavbar = () => {
    return (
        <div className='px-2'>
            <div>
                <h6 className='fw-bold text-black-60'>Login With</h6>
                <Button className='mb-2 w-100' variant="outline-primary"><FaGoogle className="me-2" />Login With Google</Button>
                <Button className='w-100' variant="outline-secondary"><FaGithub className="me-2" />Login With Github</Button>
            </div>
            <div className='mt-5'>
                <h6 className='fw-bold text-black-60'>Find Us On</h6>
                <ListGroup>
                    <Link className='text-decoration-none' to=''><ListGroup.Item><FaFacebookF className='me-2' />Facebook</ListGroup.Item></Link>
                    <Link className='text-decoration-none' to=''><ListGroup.Item><FaTwitter className='me-2' />Twitter</ListGroup.Item></Link>
                    <Link className='text-decoration-none' to=''><ListGroup.Item><FaInstagram className='me-2' />Instagram</ListGroup.Item></Link>
                    <Link className='text-decoration-none' to=''><ListGroup.Item><FaLinkedinIn className='me-2' />LinkedIn</ListGroup.Item></Link>
                </ListGroup>
            </div>
            <div>
                <Qzone></Qzone>
            </div>
            <div>
                <RaightNavBanner></RaightNavBanner>
            </div>
        </div>
    );
};

export default RightNavbar;