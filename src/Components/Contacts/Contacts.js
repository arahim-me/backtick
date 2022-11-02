import React from 'react';
import Conditions from '../../Data/conditions.json';
import './Contacts.css';
import mailJs from 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';

const Contacts = () => {
    (function() {
        emailjs.init('6DkU3TlZpo2JrDCUP');
    })();
    window.onload = function() {        
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();            
            emailjs.sendForm('contact_service', 'contact_form', this)
                .then(function() {
                    alert('SUCCESSFULLY SEND!');
                }, function(error) {
                    alert('FAILED...', error);
                });
        });
    }
    return (
        <div data-aos="fade-up" className='contacts py-4'>
            <div className='container my-4'>
                <div className='title'>
                    <h2 className='text-uppercase text-center'>Contact Us</h2>
                </div>
                <div className='after-shadow'></div>
                <div className='desc px-3'>
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum necessitatibus enim animi explicabo vel non repellendus facere cumque at quas ipsum aut mollitia illum qui modi culpa velit obcaecati, placeat aperiam, temporibus aliquid</p>
                </div>
                <div className='conditions row'>
                    {
                        Conditions.map(condition => {
                            return (
                                <div data-aos='flip-left' className='condition'>
                                    <img className='img-fluid m-1' src={condition.img} />
                                    <h6 className='m-1'>{condition.condition}</h6>
                                </div>
                            )
                        })
                    }
                </div>
                <form data-aos='flip-right' className='row input-form' method='POST' id='contact-form'>
                    <div className='col-lg-6 col-md col-sm'>
                    <input type='text' placeholder='Name' className='form-control input-text' name='user_name'/>
                    <input type='email' placeholder='Email' className='form-control input-text' name="user_email"/>
                    </div>
                    <div className='col-lg-6 col-md col-sm'>
                    <textarea rows='10' placeholder='Your Message Here' className='form-control input-text' name="message"/>
                    </div>
                    <div class="checkbox"><input type="checkbox" id='checkBox'/><p>Agree With Privacy Policy</p></div>
                    <input type='submit' className='btn btn-submit text-uppercase' value='submit'/>
                </form>
            </div>
            <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
            </div>
            );
};

            export default Contacts;