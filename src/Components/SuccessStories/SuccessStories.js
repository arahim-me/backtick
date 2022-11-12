import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Stories from '../../Data/SuccessStories.json';
import './SuccessStories.css';

const SuccessStories = () => {
    return (
        <div data-aos="fade-up" className='successStories text-center py-4' id='blogs'>
            <div className='py-4'>
                <div className='container'>
                    <div className='title'>
                        <h2 className='text-uppercase text-center'>Success Stories</h2>
                    </div>
                    <div className='after-shadow'></div>
                    <div className='desc'>
                        <p className='text-center'>We have helped several established as well as upcoming businesses gain stronghold and credibility in the market. Our dedicated and skilled workforce is equipped with problem solving strategies which include digital business transformation, and providing customized IT solutions tailored to individual companies and organizations. Our latest success stories are here.
                        </p>
                    </div>
                </div>
                <Carousel className='slider my-3'>
                    {
                        Stories.map(story => {
                            return (
                                <Carousel.Item>
                                    <div className='container'>
                                        <div className='slideItems'>
                                            <div clasName='desc'>
                                                <h6 className='desc mb-4'>"{story.story}"</h6>
                                            </div>
                                            <div className='info'>
                                                <div className='img mx-2'>
                                                    <img
                                                        className="circle img-fluid item"
                                                        src={story.img}
                                                        alt="First slide"
                                                    />
                                                </div>
                                                <div className='name mx-2 text-end'>
                                                    <h3 className='item'>{story.name}</h3>
                                                    <p className='item'>{story.title}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
