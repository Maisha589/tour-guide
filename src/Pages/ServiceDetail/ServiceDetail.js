import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

const ServiceDetail = () => {

    const handleSubmit = event => {
        event.preventDefault();
        toast("Your booking is confirmed. I will contact soon.")
    }

    return (
        <div
        // style={{
        //     backgroundImage: `url("https://i.ibb.co/NTTdcjm/bg.jpg")`
        // }}
        >
            <h2 className='text-center pt-5 mb-5 text-warning'>Confirm your booking</h2>
            <Form onSubmit={handleSubmit} className='m-auto mb-5 w-50 border border-warning p-5 border-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Country Name</Form.Label>
                    <Form.Control type="name" placeholder="Country where you want my guidance" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Additional Message</Form.Label>
                    <Form.Control type="text" placeholder="comment" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Targeted Date</Form.Label>
                    <Form.Control type="Date" placeholder="d/m/y" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>

                <Button className='fw-bold' variant="warning" type="submit">
                    Confirm Booking
                </Button>
            </Form>
        </div >
    );
};

export default ServiceDetail;