import React, { useState, useMemo } from 'react';
import { Nav } from 'react-bootstrap';
import { Card, Button, Space, Title, PasswordInput, TextInput } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { showNotification } from '@mantine/notifications';
import img1 from '../../images/img1.png'

const Login = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ loading, setLoading ] = useState(false);

    const navigate = useNavigate();

    const disabled = useMemo(() => {
        return loading;
    }, [loading]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if(password != "123123123") {
            showNotification({
                title: 'Error',
                message: "Wrong Credentials",
                color: 'red',
                icon: <i className="bi bi-x-circle"></i>
            });
            navigate('/login');
            setLoading(false);
        } else {
            try {
                if(email == "johndoe@gmail.com") {
                    localStorage.setItem('annual', 12);
                    localStorage.setItem('medical', 14);
                    localStorage.setItem('maternity', 98);
                    localStorage.setItem('paternity', 10);
                    localStorage.setItem('marriage', 3);
                    localStorage.setItem('compassionate', 3);
                    localStorage.setItem('email', email);
                    localStorage.setItem('name', "John Doe")
                    localStorage.setItem('isAdmin', 1)
                } else {
                    localStorage.setItem('annual', 12);
                    localStorage.setItem('medical', 14);
                    localStorage.setItem('maternity', 98);
                    localStorage.setItem('paternity', 10);
                    localStorage.setItem('marriage', 3);
                    localStorage.setItem('compassionate', 3);
                    localStorage.setItem('email', email);
                    localStorage.setItem('name', email.split('@')[0])
                    localStorage.setItem('isAdmin', 0)
                }
                
                setLoading(false);
                showNotification({
                    title: 'Success',
                    message: 'You have successfully logged in.',
                    color: 'green',
                    icon: <i className="bi bi-check-circle"></i>
                });
                navigate('/profile');
            } catch (error) {
                setLoading(false);
                showNotification({
                    title: 'Error',
                    message: error.message,
                    color: 'red',
                    icon: <i className="bi bi-x-circle"></i>
                });
            }
        }
    }

    return (
        <div className='row'>
            <img src={ img1 } className='col-md-6' />
            <Card 
                padding="lg" 
                className='mt-5 px-5 col-md-6 col-sm-12 mx-auto'>
                <Title order={1}>Hi, Welcome to our <br /> Login Page!</Title>
                <Space h="md" />
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                    disabled={disabled}
                />
                <Space h="sm" />
                <PasswordInput
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                    disabled={disabled}
                />
                <Space h="sm" />
                <Button
                    fullWidth
                    variant="filled"
                    color="dark"
                    loading={loading}
                    onClick={handleSubmit}>
                    Login
                </Button>

                <p className='align-end'>
                    Don't have an account?  
                    <Nav.Link onClick={() => navigate('/signup')} className="inline-link"> Register Now</Nav.Link>!
                </p>
            </Card>
        </div>
    );
}

export default Login;