import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AppNameImg from '../../assets/images/app_name.png';
import './Auth.css';

const Register = () => {
    const [formData, setFormData] = useState({ name: '', email: '', contact_number: '', password: '', confirm_password: '' });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const apiAuthUrlPrefix = import.meta.env.VITE_API_AUTH_URL_PREFIX;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${apiAuthUrlPrefix}/register`, formData)
            .then(res => setMessage('Registration successful! Please log in.'))
            .catch(err => setError(err.response?.data?.message || 'Registration failed.'));
    };

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
                    {message && <div className="alert alert-success">{message}</div>}
                    {error && <div className="alert alert-danger">{error}</div>}
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
                                <label htmlFor="contact_number">Phone:</label>
                                <input
                                    type="tel"
                                    className="form__input"
                                    id="contact_number"
                                    name="contact_number"
                                    value={formData.contact_number}
                                    onChange={handleChange}
                                    required
                                    placeholder="e.g. 08012345678"
                                    pattern="[0-9]{10,15}"
                                    maxLength={15}
                                />
                            </div>
                            <div className="form__group">
                                <label htmlFor="password">Password:</label>
                                <div style={{ position: 'relative' }}>
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
                                        style={{
                                            position: 'absolute',
                                            right: '10px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            background: 'none',
                                            border: 'none',
                                            cursor: 'pointer'
                                        }}
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
                                <div style={{ position: 'relative' }}>
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
                                        style={{
                                            position: 'absolute',
                                            right: '10px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            background: 'none',
                                            border: 'none',
                                            cursor: 'pointer'
                                        }}
                                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                                        tabIndex={-1}
                                        aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                                    >
                                        {showConfirmPassword ? '🙈' : '👁️'}
                                    </button>
                                </div>
                            </div>
                            <button type="submit" className="submit_btn btn">Sign Up</button>
                        </div>
                    </form>
                    <p className="mt-3">Already have an account? <Link to="secure/login">Login here</Link></p>
                </div>
            </div>
        </section>
    );
};

export default Register;
// filepath: c:\Users\USER\Desktop\PROJECTS\Armstrong-Number-Checker\client\app\src\features\auth\Register.jsx