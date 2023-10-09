import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { Form, Container } from 'react-bootstrap';
import '../Login/Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Login = () => {
    const { LoginUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/category/0";

    const HandleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        LoginUser(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser)
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.error(err)
            })


    }
    return (
        <div className='py-5'>
            <Container className='p-0'>
                <Form onSubmit={HandleLogin} className='bg-white p-5 w-50 mx-auto responsive-form'>
                    <h2 className='text-center fw-bold my-2'>Login</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" />
                    </Form.Group>
                    <Button className='rounded-0 w-100 mb-4' variant="dark" type="submit">
                        Login
                    </Button>
                    <p className='text-center fw-bold text-secondary'><span className='text-secondary'>Do not Have an account ?</span> <Link className='text-danger text-decoration-none' to='/signup'>Signup</Link> Here</p>
                </Form>
            </Container>
        </div>
    );
};

export default Login;