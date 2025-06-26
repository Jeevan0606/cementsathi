import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function CementPrices() {
  const [data, setData] = useState({ prices: [], lastUpdated: '' });

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    fetch('/cementPrices.json')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error("Error fetching prices:", err));
  }, []);

  const getLogoPath = (brand) => {
    return `/logos/${brand.toLowerCase()}.png`;
  };

  if (!data.prices.length) {
    return <p className="text-center mt-4">Loading prices...</p>;
  }

  return (
    <div style={{ backgroundColor: '#faf3dd', minHeight: '100vh', padding: '30px 0' }}>
      <div className="container mt-4">
        <h2 className="text-center fw-bold mb-2" style={{ color: '#5c2c2c' }}>Current Cement Prices</h2>
        <p className="text-center text-muted" style={{ fontSize: '0.9rem' }}>
          Last Updated: {data.lastUpdated}
        </p>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mt-2" data-aos="fade-up">
          {data.prices.map((item, idx) => (
            <div className="col" key={idx}>
              <div className="card shadow-lg h-100 text-center p-3 hover-shadow">
                <img
                  src={getLogoPath(item.brand)}
                  alt={item.brand}
                  onError={(e) => { e.target.src = '/logos/default.png'; }}
                  style={{
                    maxHeight: '50px',
                    objectFit: 'contain',
                    marginBottom: '8px',
                  }}
                />
                <h5 className="card-title fw-bold" style={{ color: '#5c2c2c' }}>{item.brand}</h5>
                <div className="d-flex justify-content-around mt-2">
                  <span className="badge" style={{ backgroundColor: '#FFA500', color: 'black', padding: '8px 16px' }}>
                    OPC: ₹{item.opc}
                  </span>
                  <span className="badge bg-success px-3 py-2">
                    PPC: ₹{item.ppc}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CementPrices;
