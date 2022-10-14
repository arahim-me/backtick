import React from 'react';
import './Custom.css'
import CustomThings from '../../Data/custom.json';

const Custom = () => {
    return (
        <div data-aos='fade-up' className='container my-4'>
            <div>
                <div className='title text-center'>
                    <h2>Custom Things We Do</h2>
                    <div className='after-shadow'></div>
                </div>
                <div className='desc'>
                    <p>We provide bespoke IT services, analytics, and solutions to keep your business at the top of the game. Our services range from software installation, maintenance, scalability planning, data analytics, to bespoke, need-based services. Our services come at competitive prices and cause no unnecessary financial burden to your organization.
                    </p>
                </div>
            </div>
            <div className='d-flex flex-wrap cards'>
                {
                    CustomThings.map(custom => {
                        return (
                            <div data-aos='fade-up' className="card m-3 p-3">
                                <img data-aos='flip-right' className="card-img-top w-50 mx-auto" src={custom.img} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 data-aos='fade-right' className="card-title">{custom.name}</h5>
                                    <p data-aos='fade-left' className="card-text">{custom.description}</p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
};

export default Custom;