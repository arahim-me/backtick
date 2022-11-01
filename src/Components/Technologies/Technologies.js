import React from 'react';
import Technology from '../../Data/technologies.json';

const Technologies = () => {
    return (
        <div data-aos="fade-up">
            <div className='container my-4'>
            <div>
                    <div className='title text-center'>
                        <h2>LATEST TECH WE APPLY</h2>
                        <div className='after-shadow'></div>
                    </div>
                    <div className='desc'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum necessitatibus enim animi explicabo vel non repellendus facere cumque at quas ipsum aut mollitia illum qui modi culpa velit obcaecati, placeat aperiam, temporibus aliquid officia ipsam. Illo assumenda perferendis vero excepturi, repudiandae natus voluptate provident consequuntur nulla nobis magni rerum, a doloribus repellat sapiente sunt ex voluptas maiores, beatae iure.</p>
                    </div>
                </div>
            <div className='row'>                
                {
                    Technology.map(tech => {
                        return (
                            <div className='col-sm-12 cards col-md-4 col-lg-3'>
                                <div data-aos='flip-left' className="card m-1 p-1">
                                <img data-aos='fade-left' className="card-img-top card-img mx-auto" src={tech.img} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 data-aos='fade-right' className="card-title">{tech.name}</h5>
                                    <p data-aos='fade-left' className="card-desc">{tech.description}</p>
                                </div>
                            </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
        </div>
    );
};

export default Technologies;