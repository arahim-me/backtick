import React from 'react';
import './Navbar.css';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark py-3">
            <div className="container container-fluid">
                <a className="navbar-brand" href=""><img className="img-fluid" width="200px" src="https://raw.githubusercontent.com/arahim-me/backtick-db/main/logo/logo.png"/></a>
                <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto d-flex justify-content-center align-items-center">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="">SERVICES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">PORTFOLIO</a>
                        </li>                        
                        <li className="nav-item">
                            <a className="nav-link" href="">ABOUT US</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">CONTACTS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">BLOGS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href=""><button className='btn btn-warning px-3'>Get In Touch</button></a>
                        </li>
                    </ul>
                </div>
                <img src=''/>
            </div>
        </nav>
    );
};

export default Navbar;