import React from 'react';

const About = () => {
    return (
        <main style={{ backgroundColor: '#DDD6FE' }} className='py-5'>
            <section className='container'>
                <h1 className='text-center my-4'>TEAM 67</h1>
                <div className='row mx-auto justify-content-center'>
                    <div className="col-lg-4 col-md-6 col-sm-12 my-1 p-1">
                        <div className='p-1 rounded-3' style={{ backgroundColor: 'white', height: '100%' }}>
                            <h3>Md. Rajibul Hasan</h3>
                            <h5>Email: engrajibulhasan@gmail.com</h5>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 my-1 p-2">
                        <div className='p-1 rounded-3' style={{ backgroundColor: 'white', height: '100%' }}>
                            <h3>Mohammed Azizul Hoque Sheikh</h3>
                            <h5>Email: azizsheq@gmail.com</h5>
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 my-1 p-2">
                        <div className='p-1 rounded-3' style={{ backgroundColor: 'white', height: '100%' }}>
                            <h3>Badhan Chandra Barman</h3>
                            <h5>Email: badhancsesastc112@gmail.com</h5>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;