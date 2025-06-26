import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import Select from 'react-select';

function Compare() {
  const [brands, setBrands] = useState([]);
  const [featuresMap, setFeaturesMap] = useState({});
  const [allFeatures, setAllFeatures] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800 });

    Promise.all([
      fetch('/brands.json').then(res => res.json()),
      fetch('/features.json').then(res => res.json())
    ])
      .then(([brandData, featureData]) => {
        setBrands(brandData.prices);
        setFeaturesMap(featureData);
        if (brandData.prices.length > 0) {
          const features = brandData.prices[0].features.map(f => f.split(':')[0].trim());
          setAllFeatures(features);
        }
      })
      .catch(err => console.error("Error loading data:", err));
  }, []);

  const handleSelectChange = (selectedOptions) => {
    if (selectedOptions.length > 3) {
      alert("You can compare up to 3 brands only.");
      return;
    }
    setSelectedBrands(selectedOptions.map(opt => opt.value));
  };

  const getFeatureValue = (brand, featureLabel) => {
    const match = brand.features.find(f => f.startsWith(featureLabel));
    return match ? match.split(':')[1].trim() : '-';
  };

  const renderTooltip = (feature) => {
    const def = featuresMap[feature];
    if (!def) return feature;

    const popover = (
      <Popover>
        <Popover.Header as="h5">{feature}</Popover.Header>
        <Popover.Body>
          <strong>Meaning:</strong> {def.definition}<br />
          <strong>Good Range:</strong> {def.goodRange}
        </Popover.Body>
      </Popover>
    );

    return (
      <>
        {feature}{' '}
        <OverlayTrigger trigger={['hover', 'focus']} placement="right" overlay={popover}>
          <span className="tooltip-icon" style={{ cursor: 'pointer' }}>ℹ️</span>
        </OverlayTrigger>
      </>
    );
  };

  const selectedBrandData = brands.filter(b => selectedBrands.includes(b.brand));
  const brandOptions = brands.map(b => ({ value: b.brand, label: b.brand }));

  return (
    <div style={{ backgroundColor: '#faf3dd', minHeight: '100vh', padding: '30px 0' }}>
      <div className="container py-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold" style={{ color: '#5c2c2c' }}>Compare Cement Brands</h2>
          <p className="text-muted" style={{ fontSize: '0.9rem' }}>Select up to 3 brands</p>
        </div>

        <div
          className="mx-auto mb-5"
          style={{ maxWidth: '400px', position: 'relative', zIndex: 10 }}
          data-aos="fade-up"
        >
          <Select
            options={brandOptions}
            isMulti
            value={brandOptions.filter(opt => selectedBrands.includes(opt.value))}
            onChange={handleSelectChange}
            className="basic-multi-select"
            classNamePrefix="select"
            menuPortalTarget={document.body}
            styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
          />
        </div>

        {selectedBrands.length > 0 && (
          <div className="compare-table-wrapper" data-aos="zoom-in">
            <table className="compare-table table table-bordered table-striped text-center align-middle">
              <thead className="table-dark">
                <tr>
                  <th>Feature</th>
                  {selectedBrandData.map((brand, i) => (
                    <th key={i}>
                      <img
                        src={`/logos/${brand.brand.toLowerCase().replace(/\s+/g, '-')}.png`}
                        alt={brand.brand}
                        onError={(e) => { e.target.src = '/logos/kcp.png'; }}
                        style={{ maxHeight: '30px', marginBottom: '4px' }}
                      />

                      <br />
                      {brand.brand}
                      {brand.source && (
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Popover>
                              <Popover.Body>Visit official source</Popover.Body>
                            </Popover>
                          }
                        >
                          <a
                            href={brand.source}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="brand-source-icon ms-1"
                            style={{ textDecoration: 'none', fontSize: '1.2rem' }}
                          >
                            🔗
                          </a>
                        </OverlayTrigger>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {allFeatures.map((feature, i) => (
                  <tr key={i}>
                    <td className="text-start fw-semibold">{renderTooltip(feature)}</td>
                    {selectedBrandData.map((brand, j) => (
                      <td key={j}>{getFeatureValue(brand, feature)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="text-muted text-center" style={{ fontSize: '0.85rem', marginTop: '8px' }}>
              *Disclaimer: The cement brand details shown here are based on publicly available sources,
              standard estimates, and general product literature. Actual values may vary depending on region,
              batch, and latest manufacturer specifications. Users are advised to verify directly with the brand or dealer.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Compare;
