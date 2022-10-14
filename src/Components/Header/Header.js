import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div data-aos='fade-up' className='header'>
            <div className='container text-white'>
                <h2 data-aos='fade-right'>Digital Business Transformation Through Custom Software Engineering.</h2>
                <p data-aos='fade-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consectetur quod dolor eaque modi dolorem consequatur repellat, eveniet, obcaecati culpa facilis quaerat minima corrupti asperiores?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consectetur quod dolor eaque modi dolorem</p>
                <button data-aos='flip-right' className='btn btn-solution text-uppercase'>view solution</button>
            </div>
        </div>
    );
};

export default Header;