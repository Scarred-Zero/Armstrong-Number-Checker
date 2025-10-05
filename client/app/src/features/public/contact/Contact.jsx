import React from 'react';
import {Link} from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  return (
    <section id='contact'>
        <div className="page__header">
            <div className="container">
                <div className="page__header-content">
                    <ul>
                        <li><Link to="/" id="breadcrumps">Home</Link></li>
                        <li>/</li>
                        <li>Contact Us</li>
                    </ul>
                    <h1>Feel free to Contact Us</h1>
                </div>
            </div>
        </div>

        <div className="contact__info section__padding">
            <div className="container">

                <div className="contact__info-content">
                    <div className="col-lg-6">
                        <div className="section__heading center__heading">
                            <span className="subheading">Contact Us</span>
                            <h3>Have any query?</h3>
                            <p>Feel free to drop your concerns, suggestions and questions here, and we will get back to you with a positive response.</p>
                        </div>
                    </div>
                </div>
            
                <div className="contact__info-content">
                    <div className='contact__info-content-item'>
                        <div className="contact__info-content-item">
                            <div className="contact__item">
                                <span className="subheading">Email Us</span>
                                <h4>
                                    <a href="mailto:#">*example@example.com*</a>
                                </h4>
                            </div>
                        </div>
                        <div className="contact__info-content-item">
                            <div className="contact__item">
                                <span className="subheading">Make a Call</span>
                                <h4>
                                    <a href="tel:+">*+phone number*</a> 
                                </h4>
                            </div>
                        </div>
                        <div className="contact__info-content-item">
                            <div className="contact__item">
                                <span className="subheading">Corporate Office</span>
                                <h4>*Address goes here*</h4>
                            </div>
                        </div>
                    </div>

                    <div className="contact__info-content-item">
                        <form className="contact__form form__row " method="POST" action="" id="contactForm">
                            <div className="contact__form-container">
                                <div className="form__group">
                                    <label htmlFor="name">Full Name:</label>
                                    <input type="text" name="name" size="32" className="form__input" id='name' required placeholder='John Doe'/>
                                </div>
                                
                                <div className="form__group">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" name="email" size="32" className="form__input" id='email' required placeholder='example@example.com'/>
                                </div>

                                <div className="form__group">
                                    <label htmlFor="subject">Subject:</label>
                                    <input type="text" name="subject" size="32" className="form__input" id='subject' required placeholder='Suggestion'/>
                                </div>
                                
                                <div className="form__group">
                                    <label htmlFor="message">Message:</label>
                                    <textarea className="form__input" cols="50" id="message" name="message" placeholder="Message" required="" rows="6"></textarea>
                                </div>
                            </div>

                            <div className="contact__form-content">
                                <button type="submit" className='btn submit__btn'>
                                Send <i className="fa fa-check"></i> 
                                </button>
                            </div>
                        </form> 
                    </div>
                </div>
            </div>
        </div> 
    </section>
  )
}

export default Contact;
