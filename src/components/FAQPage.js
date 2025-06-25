import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function FAQPage() {
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
    fetch('https://cementsathi-backend.onrender.com/api/faqs')
      .then(res => res.json())
      .then(data => setFaqs(data))
      .catch(err => console.error('Failed to load FAQs:', err));
  }, []);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ backgroundColor: '#faf3dd', minHeight: '100vh', padding: '30px 0' }}>
      <div className="container pt-4 pb-5">
        <h2 className="text-center fw-bold mb-2" style={{ fontSize: '2rem', color: '#5c2c2c' }}>
          Frequently Asked Questions
        </h2>
        <p className="text-center text-secondary mb-3" style={{ fontSize: '1.05rem' }}>
          Clear your doubts about cement types, grades, and CementSathi features.
        </p>

        <div className="mx-auto" style={{ maxWidth: '800px' }} data-aos="fade-up">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-3 border rounded shadow-sm overflow-hidden">
              <button
                className={`btn w-100 text-start d-flex align-items-center justify-content-between p-3 ${
                  openIndex === index ? 'bg-primary text-white' : 'bg-light text-dark'
                }`}
                onClick={() => toggle(index)}
                style={{
                  border: 'none',
                  outline: 'none',
                  fontWeight: '500',
                  fontSize: '1.05rem',
                  color: openIndex === index ? 'white' : '#5c2c2c'
                }}
              >
                <span className="me-3">{faq.question}</span>
                <span style={{ fontSize: '1.2rem' }}>{openIndex === index ? '▲' : '▼'}</span>
              </button>
              {openIndex === index && (
                <div
                  className="px-4 py-3"
                  style={{
                    backgroundColor: '#f8f9fa',
                    color: '#333',
                    fontSize: '0.97rem',
                    lineHeight: '1.6',
                    borderTop: '1px solid #dee2e6',
                    borderLeft: '4px solid #0d6efd',
                    borderRadius: '0 0 0.375rem 0.375rem',
                  }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQPage;
