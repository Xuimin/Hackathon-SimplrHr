import React, { useState, useMemo } from 'react';
import { Button, Col, Row, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { showNotification } from '@mantine/notifications';
import SideNav from '../Menu/SideNav';
import TopNav from '../Menu/TopNav';
import Application from './application';

const ELeave = () => {
    const navigate = useNavigate();
    const [ loading, setLoading ] = useState(false);

    const disabled = useMemo(() => {
        return loading;
    }, [loading]);

    return (
        <>
            <SideNav />
            <TopNav />

            <div className='container_nav'>
                <Stack direction="horizontal" gap={2} className="mt-5">
                    <h2 className='d-inline-block'>Leave Management</h2>
                    <Button variant="dark" className='ms-auto px-5' onClick={() => navigate('/leave/add')}>
                        Create leave type
                    </Button>
                </Stack>
                
                <Row className='mt-5'>
                    <Col className='box1' onClick={() => navigate('/leave/apply')}>Annual Leave</Col>
                    <Col className='box1'>Medical Leave</Col>
                    <Col className='box1'>Maternity Leave</Col>
                </Row>

                <Row>
                    <Col className='box1'>Paternity Leave</Col>
                    <Col className='box1'>Marriage Leave</Col>
                    <Col className='box1'>Compassion Leave</Col>
                </Row>

                {
                    localStorage.getItem('leave_type') != null ?
                    <Row>
                        <Col className='box1'>{localStorage.getItem('leave_type')}</Col>
                    </Row>
                    :
                    <></>
                }

                <Application />
            </div>
        </>
    );
}

export default ELeave;