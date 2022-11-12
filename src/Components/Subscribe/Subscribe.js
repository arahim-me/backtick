import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import './Subscribe.css';


const Subscribe = () => {
    const form = useRef();

    const sendEmail = (e) => {
      
      e.preventDefault();
  
      emailjs.sendForm('service_ifbb65a', 'template_4ua3uvv', form.current, '6DkU3TlZpo2JrDCUP')
        .then((result) => {
          alert('Your Subscription Successfully Sent! We will reply you within 24hrs.')
          onchange(window.location.reload());
        }, (error) => {
          alert('Oh No! Your Message can not Sent! Please Try again.');
          onchange(window.location.reload());
        });
        
    };
    return (
        <div data-aos='fade-up' className='subscribe-section' id='subscribe'>
            <div className='container'>
                <div data-aos='fade-left' className='inner-subscribe'>
                    <h4 className='text-uppercase text-center text-white my-3'>Let's describe your projects</h4>
                </div>
                <form className='agreement row' ref={form} onSubmit={sendEmail}>
                    <div data-aos='fade-right' className='input-text'><input type='text' placeholder='NAME' name='from_name' className='input-field'></input></div>
                    <div data-aos='fade-left' className='checkbox'><input type='checkbox' className='input-field'></input><p>Agree With Privacy Policy</p></div>
                    <div data-aos='fade-right' className='input-text'><input type='E-mail' placeholder='EMAIL' name='email_id' className='input-field'></input></div>
                    <div data-aos='fade-left' className='input-btn btn' onSubmit={sendEmail}><input type='submit' value="LET'S TALK" className='btn input-field' ></input></div>
                </form>
            </div>
        </div>
    );
};

export default Subscribe;