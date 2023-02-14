import React, { useState, useMemo } from 'react';
import { Form, Button, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SideNav from '../Menu/SideNav';
import TopNav from '../Menu/TopNav';

const Onboarding = () => {
    const navigate = useNavigate();

    return (
        <>
            <SideNav />
            <TopNav />

            <div className='container_nav'>
            <Stack direction="horizontal" gap={2} className="mt-5 mb-2">
                    <h2 className='d-inline-block'>Onboarding</h2>
                    {
                        localStorage.getItem('isAdmin') == 1 ?
                        <Button variant="dark" className='ms-auto px-5'
                        onClick={() => navigate('/onboarding/add')}>
                            Create task
                        </Button>
                        : 
                        <></>
                    }
                </Stack>

                <div key="Lorem nisl eros leo gravida nam pharetra." className="mb-3">
                    <Form.Check 
                    type="checkbox"
                    id="Lorem nisl eros leo gravida nam pharetra."
                    label="Lorem nisl eros leo gravida nam pharetra." />
                </div>

                <div key="Lorem nisl eros leo gravida nam pharetra." className="mb-3">
                    <Form.Check 
                    type="checkbox"
                    id="Lorem nisl eros leo gravida nam pharetra."
                    label="Lorem nisl eros leo gravida nam pharetra." />
                </div>

                <div key="Lorem nisl eros leo gravida nam pharetra." className="mb-3">
                    <Form.Check 
                    type="checkbox"
                    id="Lorem nisl eros leo gravida nam pharetra."
                    label="Lorem nisl eros leo gravida nam pharetra." />
                </div>

                <div key="Lorem nisl eros leo gravida nam pharetra." className="mb-3">
                    <Form.Check 
                    type="checkbox"
                    id="Lorem nisl eros leo gravida nam pharetra."
                    label="Lorem nisl eros leo gravida nam pharetra." />
                </div>

                <div key="Lorem nisl eros leo gravida nam pharetra." className="mb-3">
                    <Form.Check 
                    type="checkbox"
                    id="Lorem nisl eros leo gravida nam pharetra."
                    label="Lorem nisl eros leo gravida nam pharetra." />
                </div>

                <div key="Lorem nisl eros leo gravida nam pharetra." className="mb-3">
                    <Form.Check 
                    type="checkbox"
                    id="Lorem nisl eros leo gravida nam pharetra."
                    label="Lorem nisl eros leo gravida nam pharetra." />
                </div>

                <div key="Lorem nisl eros leo gravida nam pharetra." className="mb-3">
                    <Form.Check 
                    type="checkbox"
                    id="Lorem nisl eros leo gravida nam pharetra."
                    label="Lorem nisl eros leo gravida nam pharetra." />
                </div>

                <div key="Lorem nisl eros leo gravida nam pharetra." className="mb-3">
                    <Form.Check 
                    type="checkbox"
                    id="Lorem nisl eros leo gravida nam pharetra."
                    label="Lorem nisl eros leo gravida nam pharetra." />
                </div>

                <div key="Lorem nisl eros leo gravida nam pharetra." className="mb-3">
                    <Form.Check 
                    type="checkbox"
                    id="Lorem nisl eros leo gravida nam pharetra."
                    label="Lorem nisl eros leo gravida nam pharetra." />
                </div>

                {
                    localStorage.getItem('task') != null ?
                    <div key="Lorem nisl eros leo gravida nam pharetra." className="mb-3">
                        <Form.Check 
                        type="checkbox"
                        id="Lorem nisl eros leo gravida nam pharetra."
                        label={localStorage.getItem('task')} />
                    </div>
                    :
                    <></>
                }
            </div>
        </>
    );
}

export default Onboarding;