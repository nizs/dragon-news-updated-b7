import React, { useContext } from 'react';
import { Button, Navbar, Nav, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from '../../../Provider/AuthProvider';
import '../DragonNavigation/DragonNavigation.css';

const DragonNavigation = () => {
    const { user, logoutUser } = useContext(AuthContext);

    const handleLogoutUser = () => {
        logoutUser()
            .then(() => { })
            .catch((err) => console.error())
    }
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-secondary-subtle px-2">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto fw-bold dragon-nav-li">
                    <Link className='text-decoration-none me-4 text-secondary dragon-nav-anch' to='/category/0'>Home</Link>
                    <Link className='text-decoration-none me-4 text-secondary dragon-nav-anch' to='About'>About</Link>
                    <Link className='text-decoration-none text-secondary' to='Career'>Career</Link>
                </Nav>
                <Nav className="d-flex align-items-center login-action">
                    {
                        user ?

                            <>
                                <Image
                                    roundedCircle
                                    src={user?.photoURL}
                                    style={{ height: '40px' }}
                                    className='me-lg-3 fs-2'
                                ></Image>
                                <Button onClick={handleLogoutUser} className='rounded-0 px-4' variant="dark">Logout</Button>
                            </> :
                            <>
                                <FaUserCircle className='me-lg-3 fs-2 login-action-profile' />
                                <Link to='/login'>
                                    <Button className='rounded-0 px-4 me-lg-3' variant="dark">Login</Button>
                                </Link>
                            </>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default DragonNavigation;