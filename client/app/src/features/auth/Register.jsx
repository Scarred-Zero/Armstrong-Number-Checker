import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AppNameImg from '../../assets/images/app_name.png';
import './Auth.css';

const Register = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', confirm_password: '' });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, isLoading] = useState(false);
    const errorRef = useRef(null);
    const navigate = useNavigate();
    const apiAuthUrlPrefix = import.meta.env.VITE_API_AUTH_URL_PREFIX;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        isLoading(true);
        try {
            const res = await axios.post(
                `${apiAuthUrlPrefix}/register`, formData
            )
                .then(() => {
                    setMessage('Registration successful! Please log in.');
                    navigate('/secure/sign-in');
                }
                )
                .catch((err) => {
                    setError(err.response?.data?.message || 'Registration failed.')
                    // console.log("Error in post data" + error.message);
                });
        } catch (error) {
            // console.log("Error in post data" + error);
            setError(error?.message);
        } finally {
            isLoading(false);
        }
    };

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => setError(null), 10000);
            return () => clearTimeout(timer)
        }
    }, [error]);

    useEffect(() => {
        if (error && errorRef.current) {
            errorRef.current.scrollIntoView({
                behavior: 'smooth'
            });
            setTimeout(() => {
                window.scrollBy({
                    top: -150, left: 0, behavior: 'smooth'
                });
            }, 400);
        }
    }, [error]);


    return (
        <section id="register-page" className='auth__section'>
            <div className="auth__header">
                <Link className="nav__logo" to="/">
                    <img src={AppNameImg} alt="Armstrong Number Checker" className="appName__img" />
                </Link>
            </div>
            <div className="container">
                <div className="auth__container">
                    <h1>Free Sign Up</h1>
                    <p>Enter your Fullname, email address, contact and password to create an account</p>
                    <br />
                    {message && <div className="alert alert-success">{message}</div>}
                    {error && (
                        <div ref={errorRef} className="alert alert-danger">{error}</div>
                    )}
                    <form onSubmit={handleSubmit} className="auth__form" method="POST">
                        <div className="auth__form-container">
                            <div className="form__group">
                                <label htmlFor="name">Full Name:</label>
                                <input type="text" className="form__input" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder='John Doe' />
                            </div>
                            <div className="form__group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" className="form__input" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder='example@gmail.com' />
                            </div>
                            <div className="form__group">
                                <label htmlFor="password">Password:</label>
                                <div className="password__container">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="form__input"
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="eye-toggle-btn"
                                        onClick={() => setShowPassword((prev) => !prev)}
                                        tabIndex={-1}
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                    >
                                        {showPassword ? '🙈' : '👁️'}
                                    </button>
                                </div>
                            </div>
                            <div className="form__group">
                                <label htmlFor="confirm_password">Confirm Password:</label>
                                <div className="password__container">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        className="form__input"
                                        id="confirm_password"
                                        name="confirm_password"
                                        value={formData.confirm_password}
                                        onChange={handleChange}
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="eye-toggle-btn"
                                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                                        tabIndex={-1}
                                        aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                                    >
                                        {showConfirmPassword ? '🙈' : '👁️'}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <button variant="contained" type="submit" className="submit_btn btn">
                            {loading ? "Please wait..." : "Sign Up"}
                        </button>
                    </form>
                    <p className='btm--link'>Already have an account? <Link to="/secure/sign-in">Login here</Link></p>
                </div>
            </div>
        </section>
    );
};

export default Register;