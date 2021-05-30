import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const TicketBookingForm = () => {
    const [ticketInfo, setTicketInfo] = useState({
        flyingFrom: '',
        flyingto: '',
        departure: '',
        return: '',
        firstClass: 0,
        economy: 0,
        subTotal: 0,
        vat: 0,
        total: 0,
    })

    const handleSubmit = e => {
        e.preventDefault();

        console.log(ticketInfo);

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
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };

    return (
        <section className='container py-4'>
            <div className='row p-2 justify-content-center align-items-center'>
                <h3>Booking Flight</h3>
                <div className='col-lg-3 col-md-4 col-sm-12'>
                    <div class="mb-3">
                        <label for="flyingFrom" class="form-label">Flying From</label>
                        <input onBlur={handleInputField} name='flyingFrom' type="text" class="form-control" id="flyingFrom" />
                    </div>
                    <div class="mb-3">
                        <label for="flyingTo" class="form-label">Flying To</label>
                        <input onBlur={handleInputField} name='flyingto' type="text" class="form-control" id="flyingto" />
                    </div>
                </div>

                <div className='col-lg-3 col-md-4 col-sm-12'>
                    <div class="mb-3">
                        <label for="departure" class="form-label">Departure</label>
                        <input onChange={handleInputField} name='departure' type="datetime-local" class="form-control" id="departure" />
                    </div>
                    <div class="mb-3">
                        <label for="return" class="form-label">Return</label>
                        <input onChange={handleInputField} name='return' type="datetime-local" class="form-control" id="return" />
                    </div>
                </div>

                <div className='col-lg-3 col-md-4 col-sm-12'>
                    <div class="mb-3">
                        <label for="firstClass" class="form-label">First Class</label>
                        <div className='d-flex'>
                            <input type="number" defaultValue={0} class="form-control" id="firstClass" readOnly style={{ backgroundColor: 'white' }} />
                            <button onClick={() => handleTicketCount('firstClass', 'increase')} className="btn btn-secondary mx-2">+</button>
                            <button onClick={() => handleTicketCount('firstClass', 'decrease')} className="btn btn-secondary">-</button>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="economy" class="form-label">Economy</label>
                        <div className="d-flex">
                            <input type="number" defaultValue={0} class="form-control" id="economy" readOnly style={{ backgroundColor: 'white' }} />
                            <button onClick={() => handleTicketCount('economy', 'increase')} className="btn btn-secondary mx-2">+</button>
                            <button onClick={() => handleTicketCount('economy', 'decrease')} className="btn btn-secondary">-</button>
                        </div>
                    </div>
                </div>

                <div className='col-lg-3 col-md-4 col-sm-12'>
                    <table class="table">
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
                    <button onClick={handleSubmit} class="btn btn-primary w-50">Submit</button>
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