import React from 'react';
import './Platform.css'
import platformImg from './platform-img.png'

const Platform = () => {
    return (
        <div className='platform'>
            <div className="container platform__container">
                <p className="platform__text">Platform</p>
                <h5 className="platform__heading">Automating your people journey</h5>
                <img src={platformImg} alt="" />
                <div className="platform__bottom">
                    <ul className='platform__list'>
                        <li className='platform__item'>
                            <p className='platform__item-text'>Survey builder</p>
                            <p className='platform__item-subtext'>Create compliant, non-bias surveys in seconds. Choose a Reference or Exit Survey template or build your own from a selection of HR-approved, compliant, non-bias questions.</p>
                            <a className='platform__link' href="#">Learn more</a>
                        </li>
                        <li className='platform__item'>
                            <p className='platform__item-text'>Automated requests</p>
                            <p className='platform__item-subtext'>Receive feedback faster with automated requests. Save time and reduce manual, repetitive tasks with automated survey requests, easily accessible all in one place.</p>
                            <a className='platform__link' href="#">Learn more</a>
                        </li>
                        <li className='platform__item'>
                            <p className='platform__item-text'>People records</p>
                            <p className='platform__item-subtext'>Build strong talent relationships with centralised people records. Person-specific feedback is stored in one place to easily recruit, retain and remember talent.</p>
                            <a className='platform__link' href="#">Learn more</a>
                        </li>
                        <li className='platform__item'>
                            <p className='platform__item-text'>Insights</p>
                            <p className='platform__item-subtext'>Know your next move with people and organisational insights. From an aggregated overview of data to detailed feedback, find the insights you need to make confident business decisions.</p>
                            <a className='platform__link' href="#">Learn more</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Platform;
