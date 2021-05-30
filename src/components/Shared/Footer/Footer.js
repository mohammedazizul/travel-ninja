import React from 'react';

const Footer = () => {
    return (
        <section className='p-2 text-center'>
            <h3>Copyright @ {(new Date()).getFullYear} Team 67. All rights reserved</h3>
        </section>
    );
};

export default Footer;