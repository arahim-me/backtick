import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    const userInput ={
      'name': document.getElementById('userName'),
      'email': document.getElementById('userEmail'),
      'message': document.getElementById('userMessage')
    }
    e.preventDefault();

    emailjs.sendForm('service_gs509vp', 'template_9a7hhtp', form.current, '6DkU3TlZpo2JrDCUP')
      .then((result) => {
        alert('Your Message Successfully Sent! We will reply you within 24hrs.');
        onchange(window.location.reload());
      }, (error) => {
        alert('Oh No! Your Message can not Sent! Please Try again.');
      onchange(window.location.reload());
      })
      .then(
        userInput.value(' ')
      )
  };

  return (
    <form data-aos='flip-right' className='row input-form' id='contact-form' ref={form} onSubmit={sendEmail}>
      <div className='col-lg-6 col-md col-sm'>
        <input type='text' placeholder='Name' className='form-control input-text' name='from_name' id='userName' />
        <input type='email' placeholder='Email' className='form-control input-text' name="email_id" id='userEmail' />
      </div>
      <div className='col-lg-6 col-md col-sm'>
        <textarea rows='10' placeholder='Your Message Here' className='form-control input-text' name="message" id='userMessage' />
      </div>
      <div class="checkbox"><input type="checkbox" id='checkBox' name='agreement'/><p>Agree With Privacy Policy</p></div>
      <input type='submit' className='btn btn-submit text-uppercase' value='submit' />
    </form>
  );
};
export default ContactUs;