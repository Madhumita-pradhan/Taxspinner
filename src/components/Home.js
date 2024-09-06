import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
    alert("Form submitted!");
  };

  return (
    <div className="tax-container">
      <div className="tax-offer">
        <h1>Save 25% of your Tax Liability Today!</h1>
      </div>
      <div className="form-container">
        <h3>Just fill in your details and we will get back to you with expert solutions to all your tax-related issues.</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Which services are you interested in?</option>
            <option value="tax-filing">Tax Filing</option>
            <option value="consultation">Consultation</option>
            <option value="financial-planning">Financial Planning</option>
          </select>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Home;