import { useState, React } from 'react';
import './About.css';
import Ratings from '../../Data/rating.json';
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
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
                                    <CountUp start={0} end={rating.percentage}>
                                            {({ countUpRef, start }) => (
                                                <ScrollTrigger onEnter={start}>
                                                    <div data-aos='fade-left' className='d-flex'>
                                                    <h4 onEnter={start} ref={countUpRef}>{rating.percentage}</h4>
                                                    <h4 className='ms-2'>{rating.catagory}</h4>
                                                </div>
                                                </ScrollTrigger>
                                            )}
                                        </CountUp>
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