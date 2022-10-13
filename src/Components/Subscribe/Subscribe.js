import React from 'react';
import './Subscribe.css'

const Subscribe = () => {
    return (
        <div data-aos='fade-up' className='subscribe-section'>
            <div className='container'>
                <div className='inner-subscribe'>
                    <h4 className='text-uppercase text-center text-white my-3'>Let's describe your projects</h4>
                </div>
                <form className='agreement row'>
                    <div className='input-text'><input type='text' placeholder='NAME'></input></div>
                    <div className='checkbox'><input type='checkbox'></input><p>Agree With Privacy Policy</p></div>
                    <div className='input-text'><input type='E-mail' placeholder='EMAIL'></input></div>
                    <div className='input-btn btn'><input type='submit' value="LET'S TALK" className='btn'></input></div>
                </form>
            </div>
        </div>
    );
};

export default Subscribe;