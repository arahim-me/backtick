import React from 'react';
import './Footer.css';

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className='bg-primary'>
            <div className='container'>
                <div className='row footer-info'>
                    <div className='col-sm info p-3'>
                        <h3 className='text-uppercase'>Grid solution</h3>
                        <div class="after-shadow m-0"></div>
                        <p>Cell: +8801711 - 123456</p>
                        <p>email: backtick@gmail.co</p>
                        <p>331 E Evelyn Ave</p>
                        <p>Mountain View, CA 94041, USA</p>
                    </div>
                    <div className='col-sm info p-3'>
                        <h3 className='text-uppercase'>INFORMATION</h3>
                        <div class="after-shadow m-0"></div>
                        <p>Cell: +8801711 - 123456</p>
                        <p>email: backtick@gmail.co</p>
                        <p>331 E Evelyn Ave</p>
                        <p>Mountain View, CA 94041, USA</p>
                    </div>
                    <div className='col-sm info p-3'>
                        <h3 className='text-uppercase'>USEFULL LINKS</h3>
                        <div class="after-shadow m-0"></div>
                        <p>Cell: +8801711 - 123456</p>
                        <p>email: backtick@gmail.co</p>
                        <p>331 E Evelyn Ave</p>
                        <p>Mountain View, CA 94041, USA</p>
                    </div>
                    <div className='col-sm info p-3'>
                        <h3 className='text-uppercase'>BUSINESS HOURSE</h3>
                        <div class="after-shadow m-0"></div>
                        <p>Cell: +8801711 - 123456</p>
                        <p>email: backtick@gmail.co</p>
                        <p>331 E Evelyn Ave</p>
                        <p>Mountain View, CA 94041, USA</p>
                    </div>
                </div>
                <hr className='my-4'></hr>
                <div className='copyright text-center'>
                    <p>Copyright &copy; {currentYear} || BACKTICK SOLUTION LIMITED || All Right Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;