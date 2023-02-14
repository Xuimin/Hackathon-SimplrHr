import React, { useState, useMemo } from 'react';
import { showNotification } from '@mantine/notifications';
import { TextInput, Space, NumberInput, Rating, Textarea, Select, Button } from '@mantine/core';
import SideNav from '../Menu/SideNav';
import { useNavigate } from 'react-router-dom';
import TopNav from '../Menu/TopNav';
import { Accordion, Form, Row, Col } from 'react-bootstrap';
import { BiDownload } from 'react-icons/bi'

let Performance = () => {
    const [ asignee, setAssignee ] = useState("");
    const [ loading, setLoading ] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            localStorage.setItem('review', 'sent');
            setLoading(false);
            showNotification({
                title: 'Success',
                message: 'Review successfully created!',
                color: 'green',
                icon: <i className="bi bi-check-circle"></i>
            });
            navigate('/performance');

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
                Performance Review
            </h2>

            {
                localStorage.getItem('isAdmin') == 1 ?
                <Row>
                    <Col md={10}>
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
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Quality of Work</Accordion.Header>
                                <Accordion.Body>
                                Has established a track record of producing work that is highly accurate, while demonstrating attention to detail. Is personally to high quality work and encourages others to have similar standards. 
                                <Row>
                                    <NumberInput
                                    placeholder="Ratings"
                                    disabled={disabled}
                                    max={10}
                                    min={0}
                                    className="col-md-3" />

                                    <Form.Check 
                                    className="col-md-3 ms-4 mt-1"
                                    type="checkbox"
                                    label="Applicable" />
                                </Row>

                                <Space h="sm" />

                                <TextInput
                                placeholder="Comments" />

                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Initiative</Accordion.Header>
                                <Accordion.Body>
                                Recognizes opportunities and initiates actions to capitalize on them. Looks for new and productive ways to make an impact. Demonstrates this characteristic when it comes to generating new ideas or processes, capitalizing on new business opportunities, seeking out and taking on increasing responsibility or resolving problems as they occur

                                <Row>
                                    <NumberInput
                                    placeholder="Ratings"
                                    disabled={disabled}
                                    max={10}
                                    min={0}
                                    className="col-md-3" />

                                    <Form.Check 
                                    className="col-md-3 ms-4 mt-1"
                                    type="checkbox"
                                    label="Applicable" />
                                </Row>

                                <Space h="sm" />

                                <TextInput
                                placeholder="Comments" />

                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Productivity</Accordion.Header>
                                <Accordion.Body>
                                Meets or exceeds productivity standards that have been established for his/her organizational level or position. Is continuously combining skills, ability and effort to ensure that expectations related to results/output are achieved.

                                <Row>
                                    <NumberInput
                                    placeholder="Ratings"
                                    disabled={disabled}
                                    max={10}
                                    min={0}
                                    className="col-md-3" />

                                    <Form.Check 
                                    className="col-md-3 ms-4 mt-1"
                                    type="checkbox"
                                    label="Applicable" />
                                </Row>

                                <Space h="sm" />

                                <TextInput
                                placeholder="Comments" />

                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Customer Focus</Accordion.Header>
                                <Accordion.Body>
                                Personally demonstrates that external (or internal) customers are a high priority Identifies customer needs and expectations and responds to them in a timely and effective manner. Anticipates and prevents delays or other factors that could adversely affect the customer. Keeps customers informed about the status of pending actions and inquires about customer satisfaction with products or services. 

                                <Row>
                                    <NumberInput
                                    placeholder="Ratings"
                                    disabled={disabled}
                                    max={10}
                                    min={0}
                                    className="col-md-3" />

                                    <Form.Check 
                                    className="col-md-3 ms-4 mt-1"
                                    type="checkbox"
                                    label="Applicable" />
                                </Row>

                                <Space h="sm" />

                                <TextInput
                                placeholder="Comments" />

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <h2 className='mt-5'>
                            Ratings
                        </h2>

                        <Row>
                            <Col md={6} className="mt-4">
                                <h5>1. Work to Full Potential</h5>
                                <Rating size='lg'/>
                                <Textarea
                                placeholder="Comments..."
                                withAsterisk
                                className='mt-3'
                                />
                            </Col>
                            <Col md={6} className="mt-4">
                                <h5>2. Work Consistency</h5>
                                <Rating size='lg'/>
                                <Textarea
                                placeholder="Comments..."
                                withAsterisk
                                className='mt-3'
                                />
                            </Col>
                            <Col md={6} className="mt-4">
                                <h5>3. Communication</h5>
                                <Rating size='lg'/>
                                <Textarea
                                placeholder="Comments..."
                                withAsterisk
                                className='mt-3'
                                />
                            </Col>
                            <Col md={6} className="mt-4">
                                <h5>4. Independent Work</h5>
                                <Rating size='lg'/>
                                <Textarea
                                placeholder="Comments..."
                                withAsterisk
                                className='mt-3'
                                />
                            </Col>
                            <Col md={6} className="mt-4">
                                <h5>5. Group Work</h5>
                                <Rating size='lg'/>
                                <Textarea
                                placeholder="Comments..."
                                withAsterisk
                                className='mt-3'
                                />
                            </Col>
                            <Col md={6} className="mt-4">
                                <h5>6. Creativity</h5>
                                <Rating size='lg'/>
                                <Textarea
                                placeholder="Comments..."
                                withAsterisk
                                className='mt-3'
                                />
                            </Col>
                            <Col md={6} className="mt-4">
                                <h5>7. Honesty</h5>
                                <Rating size='lg'/>
                                <Textarea
                                placeholder="Comments..."
                                withAsterisk
                                className='mt-3'
                                />
                            </Col>
                            <Col md={6} className="mt-4">
                                <h5>8. Co worker Relations</h5>
                                <Rating size='lg'/>
                                <Textarea
                                placeholder="Comments..."
                                withAsterisk
                                className='mt-3'
                                />
                            </Col>
                            <Col md={6} className="mt-4">
                                <h5>9. Technical Skills</h5>
                                <Rating size='lg'/>
                                <Textarea
                                placeholder="Comments..."
                                withAsterisk
                                className='mt-3'
                                />
                            </Col>
                            <Col md={6} className="mt-4">
                                <h5>10. Dependability</h5>
                                <Rating size='lg'/>
                                <Textarea
                                placeholder="Comments..."
                                withAsterisk
                                className='mt-3'
                                />
                            </Col>
                            <Col md={6} className="mt-4">
                                <h5>11. Productivity</h5>
                                <Rating size='lg'/>
                                <Textarea
                                placeholder="Comments..."
                                withAsterisk
                                className='mt-3'
                                />
                            </Col>
                            <Col md={6} className="mt-4">
                                <h5>12. Attendance</h5>
                                <Rating size='lg'/>
                                <Textarea
                                placeholder="Comments..."
                                withAsterisk
                                className='mt-3'
                                />
                            </Col>
                            <Col md={6} className="mt-4">
                                <h5>13. Punctuality</h5>
                                <Rating size='lg'/>
                                <Textarea
                                placeholder="Comments..."
                                withAsterisk
                                className='mt-3'
                                />
                            </Col>
                            <Col md={6} className="mt-4">
                                <h5>14. Play above the line</h5>
                                <Rating size='lg'/>
                                <Textarea
                                placeholder="Comments..."
                                withAsterisk
                                className='mt-3'
                                />
                            </Col>
                            <Col md={6} className="mt-4">
                                <h5>15. Take Initiative</h5>
                                <Rating size='lg'/>
                                <Textarea
                                placeholder="Comments..."
                                withAsterisk
                                className='mt-3'
                                />
                            </Col>
                        </Row>


                        <h2 className='mt-5'>
                            Strengths / Training Needs
                        </h2>
                        <Textarea
                            placeholder="Detail Employee's Greatest Strengths"
                            withAsterisk
                            className='mt-3'
                        />

                        <Textarea
                            placeholder="Detail Aspect Requiring Improvement"
                            withAsterisk
                            className='mt-3'
                        />
                    <Button
                        fullWidth
                        className='mt-1 mb-5'
                        variant="filled"
                        color="dark"
                        loading={loading}
                        onClick={handleSubmit}>
                        Submit
                    </Button>
                    </Col>

                    <Col md={2}>
                        <div className='box2'>
                            14022023.pdf 
                            <BiDownload className='ms-4' />
                        </div>
                        {
                            localStorage.getItem('review') != null ?
                            <div className='mt-3 box2'>
                                15022023.pdf 
                                <BiDownload className='ms-4' />
                            </div>
                            :
                            <></>
                        }
                    </Col>
                </Row>
                :
                <>
                    <div className='box2 mb-3'>
                        14022023.pdf 
                        <BiDownload className='ms-4' />
                    </div>
                    <div className='box2 mb-3'>
                        20112022.pdf 
                        <BiDownload className='ms-4' />
                    </div>
                    <div className='box2 mb-3'>
                        19122021.pdf 
                        <BiDownload className='ms-4' />
                    </div>
                    <div className='box2 mb-3'>
                        12122020.pdf 
                        <BiDownload className='ms-4' />
                    </div>
                </>
            }

        </div>
    </>
    )
}

export default Performance;