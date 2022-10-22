import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Stories from '../../Data/SuccessStories.json';
import './SuccessStories.css';

const SuccessStories = () => {
    return (
             <div data-aos="fade-up" className='successStories text-center py-4'>
            <div className='py-4'>
                <div className='container'>
                <div className='title'>
                    <h2 className='text-uppercase text-center'>Success Stories</h2>
                </div>
                <div className='after-shadow'></div>
                <div className='desc'>
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt delectus eos consectetur est quaerat Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt delectus eos consectetur est quaerat</p>
                </div>
                </div>
                <Carousel className='slider my-3'>
                {
                    Stories.map(story => {
                        return (
                            <Carousel.Item className='conatiner col'>
                                <h3>{story.story}</h3>
                                <img
                                    className="img-fluid"
                                    src={story.img}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>{story.name}</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })
                }

            </Carousel>
            </div>
        </div>
    );
};

export default SuccessStories;
