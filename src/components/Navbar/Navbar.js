import React from 'react';
import './Navbar.css'
import logo from '../../Illustration/Group 86.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="container-md">
            <nav className="navbar navbar-expand-lg navbar-expand-md pt-2 ">
                    <img src={logo} alt="" width="100px"/>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" style={{color: 'black', textDecoration: 'none'}}>
                    <FontAwesomeIcon icon={faBars} />
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mt-2">
                        <li className="nav-item ">
                            <a className="nav-link ml-3" href="#">Home <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ml-3" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ml-3" href="#">Work</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ml-3" href="#">Blog</a>
                        </li>
                        <li className="nav-item mr-3 ml-3">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                        <button className="btn customButton">Contact Us</button>
                    </ul>
                </div>
            </nav>
        </div>
  );
};

export default Navbar;