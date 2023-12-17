import React, { useState } from 'react';
import './form.scss';


const RocketImg = () => {
    return (
        <div className="rocket__img__container">
            <img src="/images/Subtract.png" alt="rocket"/>
        </div>
    );
};

const FormContainer = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add your email sending logic here using formData
        console.log('Sending email:', formData);
        // Reset form fields after submission
        setFormData({
          name: '',
          email: '',
          message: '',
        });
    };
    
    return(
        <div className="form__container">
            <h2>
                Are you ready<br/> 
                to board this rocket ship?
            </h2>
            <p>Share your excitement with us.</p>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Name*'
                    className="input-padding-left"
                    required
                    />
                </div>
                <div className="form-group">
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Email*'
                    className="input-padding-left"
                    required
                    />
                </div>
                <div className="form-group form-message">
                    <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder='Message*'
                    className="input-padding-left"
                    required
                    ></textarea>
                </div>
                <button type="submit">Shoot us a message</button>
            </form>
        </div>
    );
};

const ContactUsForm = (props) => {
    return (
        <div className="main__form__container">
            <FormContainer />
            <RocketImg />
        </div>
    );
};


export default ContactUsForm;