import React, { useState, useEffect, useMemo } from 'react';
import { showNotification } from '@mantine/notifications';
import { TextInput } from '@mantine/core';
import SideNav from '../Menu/SideNav';
import { useNavigate } from 'react-router-dom';
import TopNav from '../Menu/TopNav';
import profile from '../../images/profile.png'
import { Col, Row } from 'react-bootstrap';
import { FiSend } from 'react-icons/fi'

let Profile = () => {
    const [ ic, setIC ] = useState('');
    const [ loading, setLoading ] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {

            localStorage.setItem('ic', ic);
            
            setLoading(false);
            showNotification({
                title: 'Success',
                message: 'IC successfully updated. If you have made a mistake, please contact your admin!',
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

    const navigate = useNavigate();

    const disabled = useMemo(() => {
        return loading;
    }, [loading]);

    return (
    <>
        <SideNav />
        <TopNav />

        <div className='container_nav'>
            <h2 className='my-5'>
                Profile
            </h2>

            <Row>
                <Col md={3} className="ms-2">
                    <img src={profile} width='200' height="180" className="d-block mx-auto" />
                </Col>

                <Col md={5} className='mt-4'>
                    <span className='text-input'>Name:</span> <br />
                    <b>{localStorage.getItem('name')}</b> <br />
                    <span className='text-input'>Email:</span> <br />
                    <b>{localStorage.getItem('email')}</b> <br />
                    <span className='text-input'>IC:</span> <br />
                    {
                        localStorage.getItem('isAdmin') == 1 ? 
                        <>
                            <b>000101080089</b>
                            
                        </>
                        : 
                        <>
                        {
                            localStorage.getItem('ic') == null ?
                            <>
                                <TextInput
                                    placeholder="XXXXXX-XX-XXXX"
                                    value={ic}
                                    onChange={(e) => setIC(e.currentTarget.value)}
                                    className='w-50 d-inline-block'
                                />
                                <FiSend onClick={handleSubmit}/>
                            </>
                            :
                            <b>{localStorage.getItem('ic')}</b>
                        }
                        </>
                    }

                </Col>
            </Row>

            <h2 className='my-5'>
                Leave Balance
            </h2>

            <Row className='mt-5'>
                <Col md={5} className='box2 m-2'>Annual Leave: <b>{localStorage.getItem('annual')} days </b></Col>
                <Col md={5}className='box2 m-2'>Medical Leave: <b>{localStorage.getItem('medical')} days</b></Col>
                <Col md={5} className='box2 m-2'>Maternity Leave: <b>{localStorage.getItem('maternity')} days</b></Col>
                <Col md={5} className='box2 m-2'>Paternity Leave: <b>{localStorage.getItem('paternity')} days</b></Col>
                <Col md={5} className='box2 m-2'>Marriage Leave: <b>{localStorage.getItem('marriage')} days</b></Col>
                <Col md={5} className='box2 m-2'>Compassionate Leave: <b>{localStorage.getItem('compassionate')} days</b></Col>
                {
                localStorage.getItem('leave_type') != null ?
                <Col md={5} className='box2'>{localStorage.getItem('leave_type')}: <b>{localStorage.getItem('amount')} days</b></Col>
                : 
                <></>
                }
            </Row>
        </div>
    </>
    )
}

export default Profile;