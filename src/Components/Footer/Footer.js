import React from 'react';
import './Footer.css';

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer data-aos='fade-up' className='bg-primary'>
            <div className='container'>
                <div className='row footer-info'>
                    <div data-aos='fade-right' className='col-sm info p-3'>
                        <h3 className='text-uppercase'>Backtick solution</h3>
                        <div class="after-shadow m-0"></div>
                        <p>Cell: +8801711 - 123456</p>
                        <p>email: contact@backticksolution.com</p>
                        <p>331 E Evelyn Ave</p>
                        <p>Mountain View, CA 94041, USA</p>
                    </div>
                    <div data-aos='fade-left' className='col-sm info p-3'>
                        <h3 className='text-uppercase'>INFORMATION</h3>
                        <div class="after-shadow m-0"></div>
                        <p>Cell: +8801711 - 123456</p>
                        <p>email: support@backticksolution.com</p>
                        <p>331 E Evelyn Ave</p>
                        <p>Mountain View, CA 94041, USA</p>
                    </div>
                    <div data-aos='fade-right' className='col-sm info p-3'>
                        <h3 className='text-uppercase'>USEFULL LINKS</h3>
                        <div class="after-shadow m-0"></div>
                        <p>Cell: +8801711 - 123456</p>
                        <p>email: backtick@gmail.co</p>
                        <p>331 E Evelyn Ave</p>
                        <p>Mountain View, CA 94041, USA</p>
                    </div>
                    <div data-aos='fade-left' className='col-sm info p-3'>
                        <h3 className='text-uppercase'>BUSINESS HOURSE</h3>
                        <div class="after-shadow m-0"></div>
                        <p>Our Support available to help you 24 hours a day, seven
                            days a week</p>
                        <div className='schedule'><p>Monday-Friday</p><p>9AM-7PM</p></div>
                        <div className='schedule'><p>Saturday</p><p>10AM-3PM</p></div>
                        <div className='schedule'><p>Sunday</p><p>Closed</p></div>
                    </div>
                </div>
                <hr className='my-4'></hr>
                <div className='copyright text-center'>
                    <p className='m-0'>Copyright &copy; {currentYear} || BACKTICK SOLUTION LIMITED || All Right Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;