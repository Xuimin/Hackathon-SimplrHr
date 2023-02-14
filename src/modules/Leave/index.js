import React from 'react';
import { Badge, Button, Col, Row, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SideNav from '../Menu/SideNav';
import TopNav from '../Menu/TopNav';

const Leave = () => {
    const navigate = useNavigate();

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
                    <Col className='box' onClick={() => navigate('/leave/apply')}>Annual Leave</Col>
                    <Col className='box'>Medical Leave</Col>
                    <Col className='box'>Maternity Leave</Col>
                </Row>

                <Row>
                    <Col className='box'>Paternity Leave</Col>
                    <Col className='box'>Marriage Leave</Col>
                    <Col className='box'>Compassionate Leave</Col>
                </Row>

                {
                localStorage.getItem('leave_type') != null ?
                <Row>
                    <Col className='box'>{localStorage.getItem('leave_type')}</Col>
                </Row>
                : 
                <></>
                }

                <h2 className='mt-5 mb-2'>Timeline</h2>
                <Badge bg="dark">Your annual leave has been approved by Jane Doe.</Badge> 
                <small className='ms-2'> - 2 Febuary 2023</small> <br/>
                {
                    localStorage.getItem('reasons') != null ?
                    <>
                        <Badge bg="dark">Annual Leave successfully applied. Pending for approval.</Badge>
                        <small className='ms-2'> - 15 Febuary 2023</small>
                    </>
                    :
                    <></>
                }
            </div>
        </>
    );
}

export default Leave;