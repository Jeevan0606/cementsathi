import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (res.ok) {
        toast.success('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      } else {
        toast.error(`❌ Failed: ${data.error || 'Unknown error'}`);
      }
    } catch (err) {
      console.error('❌ Network error:', err);
      toast.error('❌ Something went wrong. Please try again.');
    }
  };

  return (
    <div style={{ backgroundColor: '#faf3dd', minHeight: '100vh', padding: '30px 0' }}>
      <div className="container pt-4 pb-5">
        <ToastContainer position="top-center" autoClose={2500} />

        <h2 className="text-center fw-bold mb-2" style={{ fontSize: '2rem', color: '#5c2c2c' }}>
          Contact Us
        </h2>
        <p className="text-center text-secondary mb-4" style={{ fontSize: '1.05rem' }}>
          Have questions or feedback? Reach out to the CementSathi team.
        </p>

        <div className="mx-auto" style={{ maxWidth: '600px' }} data-aos="zoom-in">
          <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm bg-light">
            <div className="mb-3">
              <label className="form-label fw-semibold">Your Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Email Address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Message</label>
              <textarea
                name="message"
                className="form-control"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button className="btn btn-primary px-4 fw-semibold" type="submit">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
