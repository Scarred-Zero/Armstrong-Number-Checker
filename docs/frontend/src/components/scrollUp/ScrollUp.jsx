import React, { useEffect } from 'react';
import './ScrollUp.css';

const ScrollUp = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollUp = document.querySelector('.scrollup');
            if (window.scrollY >= 30) {
                scrollUp.classList.add('show-scroll');
            } else {
                scrollUp.classList.remove('show-scroll');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <a href="#" className="scrollup" aria-label="Scroll to top" onClick={handleClick}>
            <i className="fa fa-arrow-up scrollup__icon"></i>
        </a>
    );
};

export default ScrollUp;
