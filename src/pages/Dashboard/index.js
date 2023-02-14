import PocketBase from 'pocketbase';
import React, { useState, useMemo } from 'react';

import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { showNotification } from '@mantine/notifications';

import TopNav from '../../modules/Menu/TopNav';
import Login from '../../modules/Auth/Login';

const pb = new PocketBase('http://127.0.0.1:8090');

const Dashboard = () => {
    const [ loading, setLoading ] = useState(false);

    const disabled = useMemo(() => {
        return loading;
    }, [loading]);

    const isLoggedIn = useMemo(() => {
        return pb.authStore.isValid;
    }, [ pb.authStore.isValid ]);

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

export default Dashboard;