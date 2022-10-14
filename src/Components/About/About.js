import React from 'react';
import './About.css';
import Ratings from '../../Data/rating.json';
const About = () => {
    return (
        <div data-aos="fade-up" className='aboutUs'>
            <div className='container py-4'>
                <div className='title'>
                    <h2 className='text-uppercase text-center'>Who we are</h2>
                </div>
                <div className='after-shadow'></div>
                <div className='desc'>
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt delectus eos consectetur est quaerat Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt delectus eos consectetur est quaerat</p>
                </div>
                <div className='ratings'>

                    {
                        Ratings.map(rating => {
                            return (
                                <div data-aos='fade-up' className='rating'>
                                    <img data-aos='flip-right' src={rating.img} className='img-fluid card-img' />
                                    <h4 data-aos='fade-left' className='text-uppercase'>{rating.percentage}</h4>
                                    <h6 data-aos='fade-right' className='text-uppercase'>{rating.name}</h6>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            <hr></hr>
        </div>
    );
};

export default About;