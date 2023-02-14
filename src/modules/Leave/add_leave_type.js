import React, { useState } from 'react';
import SideNav from '../Menu/SideNav';
import { useNavigate } from 'react-router-dom';
import TopNav from '../Menu/TopNav';
import { TextInput, Button, Space } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { BiArrowBack } from 'react-icons/bi'

const AddLeaveType = () => {
    const [ leave, setLeave ] = useState('');
    const [ amount, setAmount ] = useState('');
    const [ loading, setLoading ] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);
        try {
            localStorage.setItem('leave_type', leave);
            localStorage.setItem('amount', amount);

            setLoading(false);
            showNotification({
                title: 'Success',
                message: 'Leave Type added successfully',
                color: 'green',
                icon: <i className="bi bi-check-circle"></i>
            });
            navigate('/leave');

        } catch (error) {
            showNotification({
                title: 'Error',
                message: error.message,
                color: 'red',
                icon: <i className="bi bi-x-circle"></i>
            });
            setLoading(false);
        }
    }

    const navigate = useNavigate();

    return (
        <>
            <SideNav />
            <TopNav />

            <div className='container_nav w-50'>
                <h2 className='my-5'>
                    <a onClick={() => navigate('/leave')} className="inline-link me-4 text-black">
                        <BiArrowBack />
                    </a>
                    Add Leave Type
                </h2>
                <TextInput
                    value={leave}
                    onChange={(e) => setLeave(e.currentTarget.value)}
                    placeholder="Leave Type Name"
                    />
                <Space h="sm" />

                <TextInput
                    value={amount}
                    onChange={(e) => setAmount(e.currentTarget.value)}
                    placeholder="Default Amount"
                    />
                <Space h="sm" />

                <Button
                    fullWidth
                    variant="filled"
                    color="dark"
                    onClick={handleSubmit}
                    loading={loading}>
                    Add
                </Button>
            </div>
        </>
    )
}

export default AddLeaveType;