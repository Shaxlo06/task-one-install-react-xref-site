import React from 'react';
import './Checks.css'
import checksImg from './checks-right.png'

const Checks = () => {
    return (
        <div className='checks'>
            <div className="container checks__container">
                <div className="checks__top">
                    <div className="checks__left">
                        <p className="checks__text">Additional checks</p>
                        <h4 className="checks__heading">Connecting you to the world of digital trust</h4>
                        <p className="checks__subtext">As a growing community of global checking vendors, Trust Marketplace is an aggregator for enhanced due diligence in the online trust environment.</p>
                        <button className="checks__btn">
                            <a className='checks__btn-visit' href="#">Visit website</a>
                        </button>
                    </div>
                    <div className="checks__right">
                        <img src={checksImg} alt="" />
                    </div>
                </div>
                <div className="checks__bottom">
                    <ul className='checks__bottom-list'>
                        <li className='checks__bottom-item'>
                            <p className="checks__bottom-text">Security and compliance</p>
                            <p className="checks__bottom-subtext">We lead with a security-first mindset, a robust infrastructure, and a compliant operating environment.</p>
                            <a className="checks__bottom-link" href="#">Learn more</a>
                        </li>
                        <li className='checks__bottom-item'>
                            <p className="checks__bottom-text">Integrations</p>
                            <p className="checks__bottom-subtext">Integrate Xref with your everyday tools for simplified people management within a single platform.</p>
                            <a className="checks__bottom-link" href="#">Learn more</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Checks;
