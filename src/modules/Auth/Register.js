import React, { useState, useMemo } from 'react';
import { Card, PasswordInput, Space, Title, Button, TextInput } from '@mantine/core';
import { Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { showNotification } from '@mantine/notifications';
import img3 from '../../images/img3.png'

const Register = () => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordConfirm, setPasswordConfirm ] = useState('');
    const [ loading, setLoading ] = useState(false);

    const navigate = useNavigate();

    const disabled = useMemo(() => {
        return loading;
    }, [loading]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if(password != passwordConfirm) {
            showNotification({
                title: 'Error',
                message: "Wrong Credentials",
                color: 'red',
                icon: <i className="bi bi-x-circle"></i>
            });
            navigate('/signup');
            setLoading(false);
        } else {
            try {
                localStorage.setItem('email', email);
                localStorage.setItem('name', name);
                
                setLoading(false);
                showNotification({
                    title: 'Success',
                    message: 'You have successfully signed up. Please login to continue.',
                    color: 'green',
                    icon: <i className="bi bi-check-circle"></i>
                });
                navigate('/login');
    
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
            <img src={ img3 } className='col-md-6' />
            <Card 
                padding="lg" className='mt-5 px-5 col-md-6 col-sm-12 mx-auto'>
                <Title order={1}>Register Now!</Title>
                <Space h="md" />
                <TextInput
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                    disabled={disabled}
                />
                <Space h="md" />
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                    disabled={disabled}
                />
                <Space h="md" />
                <PasswordInput
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                    disabled={disabled}
                />
                <Space h="md" />
                <PasswordInput
                    placeholder="Confirm Password"
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.currentTarget.value)}
                    disabled={disabled}
                />
                <Space h="md" />
                <Button
                    fullWidth
                    variant="filled"
                    color="dark"
                    loading={loading}
                    onClick={handleSubmit}>
                    Sign Up
                </Button>

                <p className='align-end'>
                    Have an account?  
                    <Nav.Link onClick={() => navigate('/login')} className="inline-link"> Login!</Nav.Link>!
                </p>
            </Card>

        </div>
    );
}

export default Register;