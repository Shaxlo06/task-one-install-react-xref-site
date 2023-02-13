import React from 'react';
import './Feedback.css'
import icon1 from './card-icon-1.svg'
import icon2 from './card-icon-2.svg'
import icon3 from './card-icon-3.svg'

const Feedback = () => {
    return (
        <div className='feedback'>
            <div className="container feedback__container">
                <div className="feedback__top">
                    <div className="feedback__left">
                        <p className='feedback__left-text'>Introducing Xref</p>
                        <h4 className="feedback__left-heading">Get feedback across the entire talent journey</h4>
                    </div>
                    <div className="feedback__right">
                        <ul className="feedback__right-list">
                            <li className="feedback__right-item">
                                <p className="feedback__right-text">Simple</p>
                                <p className="feedback__right-subtext">Save time: Create and send a survey in as little as 30 seconds. Feedback is compiled in easy to understand graphs for actionable insights.</p>
                            </li>
                            <li className="feedback__right-item">
                                <p className="feedback__right-text">Convenient</p>
                                <p className="feedback__right-subtext">Reduce admin: Surveys can be created and completed anywhere, any time, on any device. Let automation do the rest.</p>
                            </li>
                            <li className="feedback__right-item">
                                <p className="feedback__right-text">Secure</p>
                                <p className="feedback__right-subtext">Ensure peace of mind: Xref is ISO27001 certified and GDPR compliant so your data is kept safe and secure.</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="feedback__bottom">
                    <ul className='feedback__list'>
                        <li className='feedback__item'>
                            <img src={icon1} alt="" />
                            <div className="feedback__content">
                            <p className='feedback__item-text'>Reference</p>
                            <h5 className='feedback__item-heading'>
                                <span className='feedback__item-heading-color'>Recruit</span>
                                only the best validated talent.
                            </h5>
                            <p className='feedback__item-subtext'>Reduce time to hire and secure top talent fast. Make informed, compliant hiring decisions with Xref’s automated reference checking software.</p>
                            </div>
                        </li>
                        <li className='feedback__item'>
                            <img src={icon2} alt="" />
                            <div className="feedback__content">
                            <p className='feedback__item-text'>Pulse <button className='feedback__item-text-coming'>Coming soon</button></p>
                            <h5 className='feedback__item-heading'>
                                <span className='feedback__item-heading-color'>Retain</span>
                                your people and make meaningful
                            </h5>
                            <p className='feedback__item-subtext'>Want the secret to reduce attrition and understand what metrics your organisation performs well at or can improve upon? Conduct a Pulse Survey.</p>
                            </div>
                        </li>
                        <li className='feedback__item'>
                            <img src={icon3} alt="" />
                            <div className="feedback__content">
                            <p className='feedback__item-text'>Exits <button className='feedback__item-text-new'>New</button></p>
                            <h5 className='feedback__item-heading'>
                                <span className='feedback__item-heading-color'>Remember</span>
                            </h5>
                            <p className='feedback__item-subtext'>Collect, analyse and measure feedback from departing employees. Reduce attrition and improve retention over time by collecting consistent data to improve organisational performance.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Feedback;
