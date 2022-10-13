import React from 'react';
import Conditions from '../../Data/conditions.json';
import './Contacts.css';

const Contacts = () => {
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
                                <div className='condition'>
                                    <img className='img-fluid m-1' src={condition.img} />
                                    <h6 className='m-1'>{condition.condition}</h6>
                                </div>
                            )
                        })
                    }
                </div>
                <form className='row input-form'>
                    <div className='col-lg-6 col-md col-sm'>
                    <input type='text' placeholder='Name' className='form-control input-text'/>
                    <input type='email' placeholder='Email' className='form-control input-text'/>
                    </div>
                    <div className='col-lg-6 col-md col-sm'>
                    <textarea rows='10' placeholder='Your Message Here' className='form-control input-text'/>
                    </div>
                    <div class="checkbox"><input type="checkbox"/><p>Agree With Privacy Policy</p></div>
                    <button type='submit' className='btn btn-submit text-uppercase'>Submit</button>
                </form>
            </div>
            </div>
            );
};

            export default Contacts;