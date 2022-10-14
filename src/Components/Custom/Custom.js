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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum necessitatibus enim animi explicabo vel non repellendus facere cumque at quas ipsum aut mollitia illum qui modi culpa velit obcaecati, placeat aperiam, temporibus aliquid officia ipsam. Illo assumenda perferendis vero excepturi, repudiandae natus voluptate provident consequuntur nulla nobis magni rerum, a doloribus repellat sapiente sunt ex voluptas maiores, beatae iure.</p>
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