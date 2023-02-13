import React from 'react';
import './Hero.css'


const Hero = () => {
    return (
        <div className='hero'> 
            <div className="container hero__container">
                <div className="hero__content">
                    <h2 className='hero__heading'>Recruit, retain and remember your people</h2>
                    <p className='hero__text'>Simplify your talent journey and make confident, people-focused decisions with Xref.</p>
                    <div className="hero__btns">
                        <button className='hero__btn-get'>
                            <a className='hero-get' href="#">Get started for free</a>
                        </button>
                        <button className='hero__btn-req'>
                            <a className='hero-req' href="#">Request a demo</a>
                        </button>
                    </div>
                </div>
            </div>  
        </div>
    );
}

export default Hero;
