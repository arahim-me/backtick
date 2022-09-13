import React from 'react';
import './About.css';
import Ratings from '../../JsonData/rating.json';

const About = () => {
    return (
        <div className='aboutUs'>
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
                                <div className='rating'>
                                    <img src={rating.img} className='img-fluid' />
                                    <h4 className='text-uppercase'>{rating.percentage}</h4>
                                    <h6 className='text-uppercase'>{rating.name}</h6>
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