import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import OutsideClickHandler from 'react-outside-click-handler';
import AppNameImg from '../../assets/images/app_name.png';
import './Header.css';


const Header = () => {

    useEffect(() => {
        const handleScrollHeader = () => {
            const header = document.querySelector('.header');
            if (window.scrollY >= 5) {
                header.classList.add('scroll-header');
            } else {
                header.classList.remove('scroll-header');
            }
        };

        window.addEventListener('scroll', handleScrollHeader);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScrollHeader);
        };
    }, []);

    const [menuOpened, setMenuOpened] = useState(false);

    const getMenuStyles = (menuOpened) => {
        if (document.documentElement.clientWidth <= 800) {
            return { right: menuOpened ? '4%' : '-100%' };
        }
        return {};
    };

    const [activeNav, setActiveNav] = useState('#home');

    return (
        <header className='header'>

            <div className="header__top">
                <div className="container">
                    <div className="header__top-content">

                        <div className="header__top-content-item">
                            <ul className="header__contact">
                                <li>
                                    <i className="fa fa-envelope"></i>
                                    <span> Email:</span>
                                    <a href="mailto:#"> example@example.com</a>
                                </li>
                            </ul>
                        </div>

                        <div className="header__top-content-item">
                            <div>
                                <div className="header__btn">
                                    <a href="" className="btn">
                                        <i className="fa fa-user"></i> View Profile
                                    </a>
                                </div>
                            </div>

                            <div>
                                <div className="header__btn">
                                    <a href=""
                                        className="btn"
                                        id="logout">
                                        <i className="fa fa-sign-out-alt"></i>
                                        Logout
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <nav className="nav">
                <a className="nav__logo" href="index.html">
                    <img src={AppNameImg} alt="Armstrong Number Checker" className="appName__img" />
                </a>
                <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
                    <div className="nav__menu" style={getMenuStyles(menuOpened)}>
                        <ul className="nav__list">
                            <li className="nav__item">
                                <Link
                                    to='/'
                                    onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'nav__link active' : 'nav__link'}>
                                    <i className="fa fa-house nav__icon"></i>
                                    Home
                                </Link>
                            </li>
                            <li className="nav__item">
                                <Link
                                    to="/contact"
                                    onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'nav__link active' : 'nav__link'}>
                                    <i className="fa fa-phone nav__icon"></i>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="nav__toggle" onClick={() => setMenuOpened((prev) => !prev)}>
                        <i className="fa fa-bars-progress"></i>
                    </div>
                </OutsideClickHandler>
            </nav>
        </header>
    )
}

export default Header;


