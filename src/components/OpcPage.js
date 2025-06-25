import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

function OpcPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: '#faf3dd', minHeight: '100vh', padding: '30px 0' }}>
      <div className="container py-5">

        {/* Header Section with Animation */}
        <div className="row align-items-center mb-5">
          <motion.div
            className="col-md-7"
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="fw-bold mb-3" style={{ color: '#5c2c2c' }}>Ordinary Portland Cement (OPC)</h2>
            <p className="text-dark" style={{ fontSize: '1.07rem', lineHeight: '1.8' }}>
              Ordinary Portland Cement (OPC) is one of the most widely used construction materials across the globe.
              It is manufactured by finely grinding a mixture of limestone, clay, and other minerals, which are then heated in a kiln to form clinker.
              The clinker is cooled and ground with a small amount of gypsum to form OPC.
              <br /><br />
              OPC is highly regarded for its excellent compressive strength, durability, and faster setting time.
              It is available in three standard grades: OPC 33, OPC 43, and OPC 53, each suited for different structural applications.
              <br /><br />
              This page gives you a deep insight into OPC's composition, uses, properties, and why it's trusted by engineers and builders across generations.
            </p>
          </motion.div>

          <motion.div
            className="col-md-5 text-center"
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/images/opc.png"
              alt="Ordinary Portland Cement"
              className="img-fluid rounded shadow-sm"
              style={{
                maxWidth: '85%'
              }}
            />
          </motion.div>
        </div>

        {/* In-Depth Section */}
        <div className="mb-5">
          <h4 className="fw mb-3" style={{ color: '#5c2c2c' }}>In-Depth Understanding of OPC</h4>
          <p>
            OPC is a traditional cement type that has been in use since the early 19th century.
            It derives its name from Portland stone, a building stone found in Dorset, England, due to the similarity in appearance of the final product.
          </p>
          <p>
            The three OPC grades differ in their compressive strengths, with OPC 53 offering the highest strength, making it ideal for heavy-duty structural applications.
            OPC 33 and OPC 43 are typically used in masonry work, plastering, and non-load-bearing structures. Thanks to its wide availability and reliable performance, OPC has become a benchmark material in modern civil engineering.
          </p>
        </div>

        {/* Key Properties */}
        <div className="mb-5">
          <h4 className="fw-semibold mb-3" style={{ color: '#5c2c2c' }}>Key Properties & Benefits</h4>
          <ul style={{ fontSize: '1.05rem' }}>
            <li>✅ Excellent early strength gain, ideal for quick construction needs</li>
            <li>✅ Superior bond with steel in reinforced structures</li>
            <li>✅ Higher durability in structures exposed to mechanical stress</li>
            <li>✅ Precise quality control through IS standards (IS: 269:2015)</li>
          </ul>
        </div>

        {/* Durability */}
        <div className="mb-5">
          <h4 className="fw-semibold mb-3" style={{ color: '#5c2c2c' }}>Durability & Performance</h4>
          <p>
            OPC is designed to last. Its dense microstructure offers great resistance to environmental effects such as water ingress, freeze-thaw cycles, and carbonation.
            This results in longer service life and lower maintenance. High compressive strengths up to 53 MPa ensure robust load-bearing capabilities, suitable for foundations, footings, and high-rise columns.
          </p>
        </div>

        {/* Use Cases */}
        <div className="mb-5">
          <h4 className="fw-semibold mb-3" style={{ color: '#5c2c2c' }}>Where is OPC Commonly Used?</h4>
          <ul style={{ fontSize: '1.05rem' }}>
            <li>🏗️ Reinforced Concrete Structures (RCC)</li>
            <li>🌉 Bridge decks, flyovers, and dams</li>
            <li>🏢 Skyscrapers and multistory buildings</li>
            <li>🚧 Pavements, precast blocks, and poles</li>
            <li>🛠️ Mass concrete work like tunnels and marine works (OPC 53)</li>
          </ul>
        </div>

        {/* Compatibility & Sustainability */}
        <div className="row mb-5">
          <div className="col-md-6 text-center">
            <img
              src="/images/opc_cement.png"
              alt="OPC Cement Bags"
              className="img-fluid rounded shadow-sm"
              style={{
                maxWidth: '100%',
                maxHeight: '620px',
                objectFit: 'cover'
              }}
            />
          </div>

          <div className="col-md-6">
            <h4 className="fw-semibold mb-3" style={{ color: '#5c2c2c' }}>Compatibility & Mix Ratio</h4>
            <p>
              OPC works well with both manual and automated mixing. It is compatible with standard admixtures used to enhance workability, reduce shrinkage, or speed up setting.
            </p>
            <p>
              Common mix ratios using OPC are 1:2:4 (cement:sand:aggregate) for RCC and 1:3 for plastering. These ratios ensure structural integrity without waste.
            </p>

            <h4 className="fw-semibold mt-5 mb-3" style={{ color: '#5c2c2c' }}>Sustainability & Future of OPC</h4>
            <p>
              Though OPC is energy-intensive to produce, its long life span contributes positively to sustainability by reducing repair and rebuild frequency.
              Manufacturers are now incorporating carbon-reducing processes to make OPC greener.
            </p>
            <p>
              In the future, hybrid OPC blends and improved curing technologies may reduce the carbon footprint of cement even further while maintaining the performance standards.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-5">
          <h5 className="fw-bold" style={{ color: '#5c2c2c' }}>Want to explore eco-friendlier options?</h5>
          <p className="text-muted">
            Learn more about Portland Pozzolana Cement (PPC) and how it compares to OPC for sustainable building.
          </p>
          <a href="/ppc" className="btn btn-outline-primary fw-semibold px-4">
            Explore PPC →
          </a>
        </div>
      </div>
    </div>
  );
}

export default OpcPage;
