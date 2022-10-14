import React from 'react';
import './AllTechnologies.css';
import Techno from '../../Data/AllTechnologies.json';

const AllTechnologies = () => {
    return (
        <div data-aos="fade-up" className='allTechnologies text-center py-4 text-white'>
            <div className='container py-4'>
                <div className='title'>
                    <h2 className='text-uppercase text-center'>technologies we use</h2>
                </div>
                <div className='after-shadow'></div>
                <div className='desc'>
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt delectus eos consectetur est quaerat Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt delectus eos consectetur est quaerat</p>
                </div>
                <div className='ratings'>

                    {
                        Techno.map(lang => {
                            return (
                                <div className='language m-2'>
                                    <img data-aos='fade-right' src={lang.img} className='img-fluid mb-2'/>                                    
                                    <h6 data-aos='fade-left' className='text-uppercase'>{lang.name}</h6>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    );
};

export default AllTechnologies;