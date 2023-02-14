import React, { useState, useEffect, useMemo } from 'react';
import { showNotification } from '@mantine/notifications';
import { TextInput, Space, Button, Select } from '@mantine/core';
import SideNav from '../Menu/SideNav';
import { useNavigate } from 'react-router-dom';
import TopNav from '../Menu/TopNav';
import { BiArrowBack } from 'react-icons/bi'

const AddTask = () => {
    const [ loading, setLoading ] = useState(false);
    const [ task, setTask ] = useState("");
    const [ asignee, setAssignee ] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            localStorage.setItem('task', task)
            localStorage.setItem('asignee', asignee)
            
            setLoading(false);
            showNotification({
                title: 'Success',
                message: 'Task successfully added!',
                color: 'green',
                icon: <i className="bi bi-check-circle"></i>
            });
            navigate('/onboarding');

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

        <div className='container_nav w-50'>
            <h2 className='my-5'>
                <a onClick={() => navigate('/onboarding')} className="inline-link me-4 text-black">
                    <BiArrowBack />
                </a>
                Add Onboarding Task
            </h2>
            <TextInput
                placeholder="Task Name"
                value={task}
                onChange={(e) => setTask(e.currentTarget.value)}
                disabled={disabled} />
            <Space h="sm" />

            <Select
                placeholder="Assign to"
                onChange={(e) => setAssignee(e.data.value)}
                data={[
                    { value: 'John', label: 'John Doe' },
                    { value: 'Jane', label: 'Jane Doe' },
                    { value: 'Jack', label: 'Jack Doe' },
                    { value: localStorage.getItem('name'), label: localStorage.getItem('name') },
                ]}
            />
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

export default AddTask;