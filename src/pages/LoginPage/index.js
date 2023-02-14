import PocketBase from 'pocketbase';
import React, { useState, useMemo } from 'react';

import TopNav from '../../modules/Menu/TopNav';
import Login from '../../modules/Auth/Login';

import { Container } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';
import { showNotification } from '@mantine/notifications';

const pb = new PocketBase('http://127.0.0.1:8090');

const LoginPage = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const navigate = useNavigate();
    const [ loading, setLoading ] = useState(false);

    const isLoggedIn = useMemo(() => {
        return pb.authStore.isValid;
    }, [ pb.authStore.isValid ]);

    const disabled = useMemo(() => {
        return loading;
    }, [loading]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const authData = await pb.collection('users').authWithPassword(
                email,
                password,
            );
            
            setLoading(false);
            showNotification({
                title: 'Success',
                message: 'You have successfully logged in.',
                color: 'green',
                icon: <i className="bi bi-check-circle"></i>
            });
            navigate('/');
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

    return (
        <>
            <TopNav />

            <Container 
                size="s"
                pt="60px"
                pb="45px"
                className='min-height d-flex align-items-center'>
                { !isLoggedIn ? (
                    <Login />
                ) : (
                    <>

                    </>
                )}
            </Container>
        </>
    );
}

export default LoginPage;