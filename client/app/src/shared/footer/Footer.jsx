import React from 'react';
import AppNameImg from '../../assets/images/app_name.png';
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <section className="footer">
            <div className="footer__container">

                <div className="footer__widget">
                    <h5 className="footer__widget-title">About Us</h5>
                    <p className="footer__section-description">
                        The Armstrong Number Checker is a simple web application designed to determine whether a given positive integer is an Armstrong number (also known as a narcissistic number).
                    </p>
                </div>

                <div className="footer__widget footer__contact">
                    <h5 className="footer__widget-title">Contact Us</h5>
                    <ul>
                        <li> 
                            <i className="fa fa-envelope"></i>
                            <div>
                                <strong>Email Address</strong>
                                <a href="mailto:#">example@example.com</a>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="footer__btm">
                <div className="footer__btm-content">

                    <div className="footer__btm-content-item">
                        <Link className="footer__logo" to="/">
                            <img src={AppNameImg} alt="Armstrong Number Checker" className="appName__img"/>
                        </Link>
                    </div>

                    <div className="footer__btm-content-item">
                        <span className="footer__copy">
                        {currentYear} © Armstrong Number Checker - Crafted by <a href="https://xerodev.vercel.app/" target='_blank' rel='noreferrer' className='xeroDev'>XeroDev</a>
                        </span>
                    </div>

                </div>
            </div>
        </section>
    )
};

export default Footer;
