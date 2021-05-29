import React from 'react';

const TicketBookingForm = () => {

    const handleSubmit = e => {
        e.preventDefault();
    }

    const handleTicketCount = (type, purpose) => {

        purpose === 'increase'
            ? document.getElementById(type).value = parseInt(document.getElementById(type).value) + 1
            : document.getElementById(type).value = parseInt(document.getElementById(type).value) - 1;

    }

    return (
        <section className='container py-4'>
            <form onSubmit={handleSubmit} className='row p-2 justify-content-center align-items-center'>
                <h3>Booking Flight</h3>
                <div className='col-lg-3 col-md-4 col-sm-12'>
                    <div class="mb-3">
                        <label for="flyingFrom" class="form-label">Flying From</label>
                        <input type="text" class="form-control" id="flyingFrom" />
                    </div>
                    <div class="mb-3">
                        <label for="flyingTo" class="form-label">Flying To</label>
                        <input type="text" class="form-control" id="flyingto" />
                    </div>
                </div>

                <div className='col-lg-3 col-md-4 col-sm-12'>
                    <div class="mb-3">
                        <label for="departure" class="form-label">Departure</label>
                        <input type="datetime-local" class="form-control" id="departure" />
                    </div>
                    <div class="mb-3">
                        <label for="return" class="form-label">Return</label>
                        <input type="datetime-local" class="form-control" id="return" />
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
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Charge</td>
                                <td>10% VAT</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='col-12 text-center'>
                    <button type="submit" class="btn btn-primary w-50">Submit</button>
                </div>
            </form>
        </section>
    );
};

export default TicketBookingForm;