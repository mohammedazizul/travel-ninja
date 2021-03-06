import React, { useState } from 'react';
import Modal from 'react-modal';

//Redux Part
import {useDispatch } from "react-redux";
import { addToBooking } from '../../../actions';

Modal.setAppElement('#root');

const TicketBookingForm = () => {
    const dispatch = useDispatch();
    const [ticketInfo, setTicketInfo] = useState({
        flyingFrom: '',
        flyingto: '',
        departure: '',
        arrival: '',
        firstClass: 0,
        economy: 0,
        subTotal: 0,
        vat: 0,
        total: 0,
    })

    const handleSubmit = e => {
        e.preventDefault();

        console.log(ticketInfo,'checking');
        dispatch(addToBooking(ticketInfo));
        openModal();

    }

    const handleInputField = e => {
        const newTicketInfo = {
            ...ticketInfo
        }
        newTicketInfo[e.target.name] = e.target.value;
        setTicketInfo(newTicketInfo);
    }

    const handleTicketCount = (type, purpose) => {
        purpose === 'increase'
            ? document.getElementById(type).value = parseInt(document.getElementById(type).value) + 1
            : document.getElementById(type).value = parseInt(document.getElementById(type).value) - 1;

        const newTicketInfo = {
            ...ticketInfo
        }

        newTicketInfo[type] = parseInt(document.getElementById(type).value);
        newTicketInfo.subTotal = (newTicketInfo.firstClass * 150) + (newTicketInfo.economy * 100);
        newTicketInfo.vat = newTicketInfo.subTotal * 0.1;
        newTicketInfo.total = newTicketInfo.subTotal + newTicketInfo.vat;
        setTicketInfo(newTicketInfo);
    }
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const modalCustomStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };

    return (
        <section className='container py-4'>
            <div className='row p-2 justify-content-center align-items-center'>
                <h3>Booking Flight</h3>
                <div className='col-lg-3 col-md-4 col-sm-12'>
                    <div className="mb-3">
                        <label htmlFor="flyingFrom" className="form-label">Flying From</label>
                        <input onBlur={handleInputField} name='flyingFrom' type="text" className="form-control" id="flyingFrom" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="flyingTo" className="form-label">Flying To</label>
                        <input onBlur={handleInputField} name='flyingto' type="text" className="form-control" id="flyingto" />
                    </div>
                </div>

                <div className='col-lg-3 col-md-4 col-sm-12'>
                    <div className="mb-3">
                        <label htmlFor="departure" className="form-label">Departure</label>
                        <input onChange={handleInputField} name='departure' type="datetime-local" className="form-control" id="departure" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="arrival" className="form-label">Arrival</label>
                        <input onChange={handleInputField} name='arrival' type="datetime-local" className="form-control" id="arrival" />
                    </div>
                </div>

                <div className='col-lg-3 col-md-4 col-sm-12'>
                    <div className="mb-3">
                        <label htmlFor="firstClass" className="form-label">First Class</label>
                        <div className='d-flex'>
                            <input type="number" defaultValue={0} className="form-control" id="firstClass" readOnly style={{ backgroundColor: 'white' }} />
                            <button onClick={() => handleTicketCount('firstClass', 'increase')} className="btn btn-secondary mx-2">+</button>
                            <button onClick={() => handleTicketCount('firstClass', 'decrease')} className="btn btn-secondary">-</button>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="economy" className="form-label">Economy</label>
                        <div className="d-flex">
                            <input type="number" defaultValue={0} className="form-control" id="economy" readOnly style={{ backgroundColor: 'white' }} />
                            <button onClick={() => handleTicketCount('economy', 'increase')} className="btn btn-secondary mx-2">+</button>
                            <button onClick={() => handleTicketCount('economy', 'decrease')} className="btn btn-secondary">-</button>
                        </div>
                    </div>
                </div>

                <div className='col-lg-3 col-md-4 col-sm-12'>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>Sub-Total</td>
                                <td>{ticketInfo.subTotal}</td>
                            </tr>
                            <tr className='border-dark'>
                                <td>Charge(10% VAT)</td>
                                <td>{ticketInfo.vat}</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>{ticketInfo.total}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='col-12 text-center'>
                    <button onClick={handleSubmit} className="btn btn-primary w-50">Submit</button>
                </div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                style={modalCustomStyles}
            >
                <h2>Thank You for Comfirming Your ticket</h2>
                <button onClick={closeModal} className='btn btn-success'>close</button>
            </Modal>
        </section>
    );
};

export default TicketBookingForm;