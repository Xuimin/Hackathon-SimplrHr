import React from 'react';
import { Card } from '@mantine/core';
import SideNav from '../Menu/SideNav';
import { useNavigate } from 'react-router-dom';
import TopNav from '../Menu/TopNav';
import profile from '../../images/profile.png';
import profile2 from '../../images/profile2.png';
import profile3 from '../../images/profile3.png';
import { Row, Col } from 'react-bootstrap';

let ViewEmployee = () => {
    const navigate = useNavigate();

    return (
        <>
            <SideNav />
            <TopNav />

            <div className='container_nav'>
                <h2 className='my-5'>
                View Employees
                </h2>

                <Row>
                    <Col md={12}>
                        <Card shadow="sm" p="md" radius="md" withBorder onClick={() => navigate('/profile')}>
                            <img src={profile} height="50px" width="60px" />
                            <span className='ms-3 w-50'>John Doe</span>
                        </Card>
                    </Col>
                    <Col md={12} className="mt-2">
                        <Card shadow="sm" p="md" radius="md" withBorder onClick={() => navigate('/profile')}>
                            <img src={profile2} height="50px" width="60px" />
                            <span className='ms-3 w-50'>Jane Doe</span>
                        </Card>
                    </Col>
                    <Col md={12} className="mt-2">
                        <Card shadow="sm" p="md" radius="md" withBorder onClick={() => navigate('/profile')}>
                            <img src={profile3} height="50px" width="60px" />
                            <span className='ms-3 w-50'>Jack Doe</span>
                        </Card>
                    </Col>
                    <Col md={12} className="mt-2">
                        <Card shadow="sm" p="md" radius="md" withBorder onClick={() => navigate('/profile')}>
                            <img src={profile} height="50px" width="60px" />
                            <span className='ms-3 w-50'>{localStorage.getItem('name')}</span>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default ViewEmployee;