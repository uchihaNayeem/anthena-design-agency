import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import './Header.css';

const Header = () => {
    return (
        <div className="top-banner">
            <Navbar></Navbar>
            <Banner/>
        </div>
    );
};

export default Header;