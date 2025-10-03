import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AppNameImg from '../../assets/images/app_name.png';
import './Auth.css';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
    const {isAuthenticated, login} = useAuth();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, isLoading] = useState(false);
    const errorRef = useRef();
    const navigate = useNavigate();
    const apiAuthUrlPrefix = import.meta.env.VITE_API_AUTH_URL_PREFIX;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        isLoading(true)
        try {
            const res = await axios.post(
                `${apiAuthUrlPrefix}/login`, formData
            );
            const token = res.data.data.token;
            console.log(res.data)
            if (token) {
                login(token);    
                setMessage('Login successful! Go find those numbers.');
                navigate("/");
            } else {
                setError("No token recieved. Login Failed.");
            }
        } catch (error) {
            setError(error.response?.data?.message || "Login Failed.");
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
                    top: -150, letf: 0, behavior: 'smooth'
                });
            }, 400);
        }
    }, [error]);

    return (
        <section id="login-page" className='auth__section'>
            <div className="auth__header">
                <Link className="nav__logo" to="/">
                    <img src={AppNameImg} alt="Armstrong Number Checker" className="appName__img" />
                </Link>
            </div>
            <div className="container">
                <div className="auth__container">
                    <h1>Sign In</h1>
                    <p>Enter your email address and password to access account.</p>
                    <br />
                    {message && <div className="alert alert-success">{message}</div>}
                    {error && (
                        <div ref={errorRef} className="alert alert-danger">{error}</div>
                    )}
                    <form onSubmit={handleSubmit} className="auth__form" method="POST">
                        <div className="auth__form-container">

                            <div className="form__group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" className="form__input" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder='example@gmail.com' />
                            </div>
                            <div className="form__group">
                                <label htmlFor="password">Password:</label>
                                <div className='password__container'>
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
                        </div>
                        <button variant="contained" type="submit" className="submit_btn btn">
                            {loading ? "Please wait..." : "Sign In"}
                        </button>
                    </form>
                    <p className="mt-3">Don't have an account? <Link to="/secure/sign-up">Create one</Link></p>
                </div>
            </div>
        </section>
    );
};

export default Login;