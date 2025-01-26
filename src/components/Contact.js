import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_y6xxhfl', // Replace with your EmailJS Service ID
        'template_fq7re1y', // Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        '5TFF_9KZgFeJFGH0C' // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log('Message sent:', result.text);
          setShowPopup(true); // Show the pop-up
          setTimeout(() => setShowPopup(false), 3000);
          setFormData({ name: '', email: '', phone: '', message: '' });
        },
        (error) => {
          console.error('Error:', error.text);
          alert('Failed to send the message. Please try again.');
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <div className="map">
      <iframe
  title="Google Map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122103.71418274949!2d81.72412765160443!3d16.98728221237206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a3f2440c9fff%3A0x86b24503e305ca21!2z4LCw4LC-4LCc4LCu4LC54LGH4LCC4LCm4LGN4LCw4LC14LCw4LCCLCDgsIbgsILgsKfgsY3gsLAg4LCq4LGN4LCw4LCm4LGH4LC24LGN!5e0!3m2!1ste!2sin!4v1737910426607!5m2!1ste!2sin"
  width="100%"
  height="400"
  style={{ border: 0, borderRadius: '10px' }}
  allowFullScreen=""
  loading="lazy"
></iframe>

      </div>
      <div className="info">
        <h2>Contact Info</h2>
        <p></p>
        <p>sowmyachitturi340@gmail.com</p>
        <p>+916300268232</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
        {showPopup && <div className="popup">Email Sent Successfully!</div>}
      </div>
    </section>
  );
};

export default Contact;
