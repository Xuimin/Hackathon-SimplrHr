import React, { useState, useEffect, useMemo } from 'react';
import DatePicker from 'react-date-picker';
import { showNotification } from '@mantine/notifications';
import { TextInput, Space, Button } from '@mantine/core';
import SideNav from '../Menu/SideNav';
import { useNavigate } from 'react-router-dom';
import TopNav from '../Menu/TopNav';
import { BiArrowBack } from 'react-icons/bi'
import { Col, Row } from 'react-bootstrap';

const Apply = () => {
    const [ startDate, setStartDate ] = useState("");
    const [ endDate, setEndDate ] = useState("");
    const [ reason, setReasons ] = useState("");
    const [ duration, setDuration ] = useState("");
    const [ file, setFile ] = useState("");
    const [ loading, setLoading ] = useState(false);

    if(startDate != "" && endDate != "" && duration == "") {
        setDuration("2")
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            localStorage.setItem('start', startDate);
            localStorage.setItem('end', endDate);
            localStorage.setItem('reasons', reason);
            localStorage.setItem('duration', duration);
            localStorage.setItem('file', file);
            localStorage.setItem('annual', 10);

            setLoading(false);
            showNotification({
                title: 'Success',
                message: 'Application successfully sent! Please wait for admin to approve.',
                color: 'green',
                icon: <i className="bi bi-check-circle"></i>
            });
            navigate('/leave');

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
                <a onClick={() => navigate('/leave')} className="inline-link me-4 text-black">
                    <BiArrowBack />
                </a>
                Annual Leave Form
            </h2>

            <Row>
                <Col md={6}>
                    Start Date: <br />
                    <DatePicker 
                        className="w-100"
                        placeholder="End Date"
                        value={startDate} 
                        onChange={date => setStartDate(date)} />
                    <Space h="sm" />
                </Col>
                
                <Col md={6}>
                    End Date: <br />
                    <DatePicker 
                        className="w-100"
                        placeholder="End Date"
                        value={endDate} 
                        onChange={date => setEndDate(date)} />
                    <Space h="sm" />
                </Col>
            </Row>

            <TextInput
                placeholder="Duration"
                value={duration}
                onChange={(e) => setDuration(e.currentTarget.value)}
                disabled={disabled} />
            <Space h="sm" />

            <TextInput
                placeholder="Reasons"
                value={reason}
                onChange={(e) => setReasons(e.currentTarget.value)}
                disabled={disabled} />
            <Space h="sm" />
            
            <TextInput
                placeholder="Supporting Documents"
                value={file}
                onChange={(e) => setFile(e.currentTarget.value)}
                disabled={disabled} />
            <Space h="sm" />

            <Button
                fullWidth
                variant="filled"
                color="dark"
                loading={loading}
                onClick={handleSubmit}>
                Submit
            </Button>
        </div>
    </>
    )
}

export default Apply;