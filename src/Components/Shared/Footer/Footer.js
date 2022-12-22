import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <footer className='h-50 w-100 py-3'>
           <p className='text-center text-white'>Programing Hero {year}</p> 
        </footer>
    );
};

export default Footer;