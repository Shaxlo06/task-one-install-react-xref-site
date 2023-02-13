import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <header className='header'>
            <div className="container header__container">
                <nav className='header__navbar'>
                    <ul className='header__list'>
                        <li className='header__item'>
                            <a className='header__link' href="#">Why Xref</a>
                        </li>
                        <li className='header__item'>
                            <a className='header__link' href="#">Solutions</a>
                        </li>
                        <li className='header__item'>
                            <a className='header__link' href="#">Platform</a>
                        </li>
                        <li className='header__item'>
                            <a className='header__link' href="#">Resources</a>
                        </li>
                        <li className='header__item'>
                            <a className='header__link' href="#">Pricing</a>
                        </li>
                    </ul>
                </nav>
                <div className="header__btns">
                    <button className='header__btn-sign'>
                        <a className='btn-sign' href="#">Sign in</a>
                    </button>
                    <button className='header__btn-req'>
                        <a className='btn-req' href="#">Request a demo</a>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
