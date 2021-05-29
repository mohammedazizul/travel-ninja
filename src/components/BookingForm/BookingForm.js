import React from 'react';
import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const BookingForm = () => {
    
    const [hideForm, setHideForm] = useState(false);    // to form toggle
    const [firstClassCheck, setFirstClassCheck] = useState(false);  // to first class quantity toggle 
    const [economyClassCheck, setEconomyClassCheck] = useState(false);  // to first class quantity toggle 
    // form data
    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        departure: "",
        arrival: "",
        departDate: "",
        returnDate: "",
        ftQuantity: 0,
        ecQuantity: 0
    });
    const [error, setError] = useState({}); // to store form error

    // function to set field
    const setField = (field, value) => {
        setFormData({
            ...formData,
            [field]: value
        })
        if ( !!error[field] ) setError({
            ...error,
            [field]: null
        })
    }

    // function set error message
    const findFormError = () => {
        const { name, contact, departure, arrival, departDate, returnDate, ftQuantity, ecQuantity } = formData;
        const newErrors = {};

        if ( !name || name === '' ) newErrors.name = 'passenger name cannot be blank';

        if ( !contact || contact === '' ) newErrors.contact = 'contact number cannot be blank';

        if ( !departure || departure === '' ) newErrors.departure = 'departure cannot be blank';

        if ( !arrival || arrival === '' ) newErrors.arrival = 'arrival cannot be blank';

        if (firstClassCheck) {
            if ( !ftQuantity || ftQuantity === '' ) newErrors.ftQuantity = 'first class ticket quantity cannot be blank';
        }
        
        if (economyClassCheck) {
            if ( !ecQuantity || ecQuantity === '' ) newErrors.ecQuantity = 'economy class ticket quantity cannot be blank';
        }

        return newErrors;
    }

    // function to handle booking form
    const handleBookingForm = (e) => {
        e.preventDefault()
        const newError = findFormError();

        if ( Object.keys(newError).length > 0){
            setError(newError)

        } else {
            console.log(formData);
            alert("Booking Confirmed !!!");
        }
    }

    return (
        <div className="container">


            <Button onClick={() => setHideForm(true)}>Make Booking</Button>
            {
                hideForm && 
                <div> 
                <Form className="mt-2" onSubmit={handleBookingForm}>
                
                    <Form.Group controlId="username">
                        <Form.Label>Passenger Name</Form.Label>
                        <Form.Control
                        type="text" 
                        placeholder="passenger name here"
                        onChange={e => setField('name', e.target.value.toUpperCase())}
                        isInvalid={ !!error.name }
                        feedback={ error.name }
                        />
                        <Form.Control.Feedback type='invalid'>
                            { error.name }
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="contact">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="+00 00000 00 00 00" 
                        onChange={e => setField('contact', e.target.value)}
                        isInvalid={ !!error.contact }
                        feedback={ error.contact }
                        />
                        <Form.Control.Feedback type='invalid'>
                            { error.contact }
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="departure">
                        <Form.Label>Departure</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="departing station" 
                        onChange={e => setField('departure', e.target.value.toUpperCase())}
                        isInvalid={ !!error.departure }
                        feedback={ error.departure }
                        />
                        <Form.Control.Feedback type='invalid'>
                            { error.departure }
                        </Form.Control.Feedback>
                    </Form.Group>
    
                    <Form.Group controlId="arrival">
                        <Form.Label>Arrival</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="arrival station" 
                        onChange={e => setField('arrival', e.target.value.toUpperCase())}
                        isInvalid={ !!error.arrival }
                        feedback={ error.arrival }
                        />
                        <Form.Control.Feedback type='invalid'>
                            { error.arrival }
                        </Form.Control.Feedback>
                    </Form.Group>

                    {/* depart and return dates */}

                    <div className="pt-2">
                        <Row>
                            <Col >
                                <p>Space for Departure Date - Please add</p>
                            </Col>
                            <Col>
                                <p>Space for Return Date - Please add</p>
                            </Col>
                        </Row>
                    </div>

                    {/* check boxes */}
                    <p>Please tick the class type</p>
                    <div>
                        <Row>
                            <Col >
                                <Form.Group controlId="firstClassCheck">
                                    <Form.Check type="checkbox" label="First Class"
                                    onChange={() => setFirstClassCheck(!firstClassCheck)}
                                    />
                                </Form.Group>
                                {
                                    firstClassCheck && 
                                    <Form.Group controlId="firstClassTicketQuantity">
                                        <Form.Label>Enter number of ticket</Form.Label>
                                        <Form.Control 
                                        type="number" 
                                        placeholder="0" 
                                        onChange={e => setField('ftQuantity', e.target.value)}
                                        isInvalid={ !!error.ftQuantity }
                                        feedback={ error.ftQuantity }
                                        />
                                        <Form.Control.Feedback type='invalid'>
                                            { error.ftQuantity }
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                }   
                            </Col>
                            <Col>
                                <Form.Group controlId="economyClassCheck">
                                    <Form.Check type="checkbox" label="Economy Class"
                                    onChange={() => setEconomyClassCheck(!economyClassCheck)}
                                    />
                                </Form.Group>
                                {
                                    economyClassCheck && 
                                    <Form.Group controlId="economyClassTicketQuantity">
                                        <Form.Label>Enter number of ticket</Form.Label>
                                        <Form.Control 
                                        type="number" 
                                        placeholder="0" 
                                        onChange={e => setField('ecQuantity', e.target.value)}
                                        isInvalid={ !!error.ecQuantity }
                                        feedback={ error.ecQuantity }
                                        />
                                        <Form.Control.Feedback type='invalid'>
                                            { error.ecQuantity }
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                }
                            </Col>
                        </Row>
                    </div>

                    {/* buttons  */}
                    <div className="pt-2">
                        <Row>
                            <Col >
                                <Button variant="success" type="submit">
                                    Book Now
                                </Button>
                            </Col>
                            <Col>
                                <Button variant="warning" onClick={() => setHideForm(false)}>
                                    Cancel Booking
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </Form>
                </div>
            }

        </div>
    );
};

export default BookingForm;