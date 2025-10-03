import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OutsideClickHandler from 'react-outside-click-handler';
import AppNameImg from '../../assets/images/app_name.png';
import './Header.css';
import { useAuth } from '../../context/AuthContext';
import { useUser } from '../../context/UserContext';


const Header = () => {
    const { isAuthenticated, logout } = useAuth();
    const userData = useUser();
    const navigate = useNavigate();
    const apiAuthUrlPrefix = import.meta.env.VITE_API_AUTH_URL_PREFIX;

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            await axios.post(
                `${apiAuthUrlPrefix}/logout`, {},
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );
            logout();
            navigate('/secure/sign-in');
        } catch (err) {
            // Optionally show an error message
            console.error('Logout failed:', err);
            logout();
            navigate('/secure/sign-in');
        }
    };

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

                        <div className="header__top-content">
                            {!isAuthenticated ? (
                                <div className="header__top-content-item">
                                    <div className="header__btn">
                                        <Link to="/secure/sign-up" className="btn">
                                            Sign Up <i className="fa fa-user-plus"></i>
                                        </Link>
                                    </div>
                                    <div className="header__btn">
                                        <Link to="/secure/sign-in" className="btn">
                                            Sign In <i className="fa fa-sign-in"></i>
                                        </Link>
                                    </div>
                                </div>
                            ) : (
                                <div className="header__top-content-item">
                                    <div className="header__btn">
                                        <Link to='/profile' className="btn">
                                            Profile <i className="fa fa-user"></i>
                                        </Link>
                                    </div>
                                    <div className="header__btn">
                                        <a href="#" className="btn" id="logout" onClick={handleLogout}>
                                            Logout <i className="fa fa-sign-out"></i>
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>

            <nav className="nav">
                <Link className="nav__logo" to="/">
                    <img src={AppNameImg} alt="Armstrong Number Checker" className="appName__img" />
                </Link>
                <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
                    <div className="nav__menu" style={getMenuStyles(menuOpened)}>
                        <ul className="nav__list">
                            <li className="nav__item">
                                <Link
                                    to='/'
                                    onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'nav__link active' : 'nav__link'}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav__item">
                                <Link
                                    to="/contact"
                                    onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'nav__link active' : 'nav__link'}>
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


