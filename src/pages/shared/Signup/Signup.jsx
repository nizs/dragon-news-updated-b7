import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Form, Container } from 'react-bootstrap';
import '../Login/Login.css';
import { Link, Navigate } from 'react-router-dom';
import '../Login/Login.css';
import { AuthContext } from '../../../Provider/AuthProvider';

const Signup = () => {
    const { createUser, updateUserprofile } = useContext(AuthContext);
    const [termaccepted, setTermaccepted] = useState(false);

    const handleSignup = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                handleUpdateProfile(name, photoURL)
                Navigate('/category/0')
            })
            .catch(err => {
                console.error(err);
            })
        form.reset();

    }
    const handleAccepted = e => {
        setTermaccepted(e.target.checked);
    }

    const handleUpdateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserprofile(profile)
            .then(() => { })
            .catch(err => console.error(err))
    }
    return (
        <div className='py-5'>
            <Container className='p-0'>
                <Form onSubmit={handleSignup} className='bg-white p-5 w-50 mx-auto responsive-form'>
                    <h2 className='text-center fw-bold my-2'>Signup</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fw-bold text-secondary'>Your Name</Form.Label>
                        <Form.Control className='' name='name' type="Text" placeholder="Enter your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fw-bold text-secondary'>Photo Url</Form.Label>
                        <Form.Control name='photo' type="Text" placeholder="Enter your photoURL" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fw-bold text-secondary'>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter your email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='fw-bold text-secondary'>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Enter Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={handleAccepted} type="checkbox" label={<>Allow our<Link className='text-secondary fs-6' to='/terms'>Terms</Link></>} />
                    </Form.Group>
                    <Button className='rounded-0 w-100 mb-4 fw-bold' variant="dark" type="submit" disabled={!termaccepted}>
                        Signup
                    </Button>
                    <p className='text-center fw-bold text-secondary'><span className='text-secondary'>Already Have an account ?</span> <Link className='text-danger text-decoration-none' to='/login'>Login</Link> Here</p>
                </Form>
            </Container>
        </div>
    );
};

export default Signup;