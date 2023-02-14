import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { IoIosNotifications } from 'react-icons/io'

const TopNav = () => {
    const navigate = useNavigate();

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    {
                        localStorage.getItem('name') != null ? (
                            <Navbar.Brand onClick={() => navigate('/')}className="me-5">Simple HR</Navbar.Brand>
                        ) : (
                            <Navbar.Brand className="me-5"></Navbar.Brand>
                        )
                    }
                    <Nav>
                    { localStorage.getItem('name') != null ? (
                        <>
                            <Nav.Link><IoIosNotifications /></Nav.Link>
                            <Nav.Link onClick={() => navigate('/profile')}>{localStorage.getItem('name')}</Nav.Link>
                        </>
                    ) : (
                        <>
                            <Nav.Link onClick={() => navigate('/signup')}>Register</Nav.Link>
                            <Nav.Link onClick={() => navigate('/login')}>Login</Nav.Link>
                        </>
                    )}
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default TopNav;