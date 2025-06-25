import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

function PpcPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: '#faf3dd', minHeight: '100vh', padding: '30px 0' }}>
      <div className="container py-5">
        <div className="row align-items-center mb-5">
          <motion.div
            className="col-md-7"
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="fw-bold mb-3" style={{ color: '#5c2c2c' }}>Portland Pozzolana Cement (PPC)</h2>
            <p className="text-dark" style={{ fontSize: '1.07rem', lineHeight: '1.8' }}>
              Portland Pozzolana Cement (PPC) is an eco‑friendly cement made by blending Ordinary Portland Cement clinker
              with pozzolanic materials such as fly ash, volcanic ash, or silica fumes.
              <br /><br />
              The added pozzolana reacts with calcium hydroxide, creating additional cementitious compounds that
              enhance durability and resistance to chemical attack. PPC features lower heat of hydration and is
              widely used in sustainable, water‑retaining, and marine structures.
              <br /><br />
              Discover why PPC is a sustainable choice for modern construction—combining performance, longevity, and environmental responsibility.
            </p>
          </motion.div>

          <motion.div
            className="col-md-5 text-center"
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/images/ppc.png"
              alt="Portland Pozzolana Cement"
              className="img-fluid rounded shadow-sm"
              style={{ maxWidth: '90%' }}
            />
          </motion.div>
        </div>

        <div className="mb-5">
          <h4 className="fw mb-3" style={{ color: '#5c2c2c' }}>Understanding PPC in Depth</h4>
          <p>
            Pozzolanic additives have been used since ancient Rome, but modern PPC combines these natural materials with
            Portland clinker to achieve consistent performance. The result is slower initial strength gain, but increased
            long-term strength and durability.
          </p>
          <p>
            PPC meets international and Indian standards (IS 1489), and is available in consistent quality across
            range of suppliers. It is increasingly preferred for structures exposed to aggressive environmental
            conditions like seawater, industrial effluents, and humid climates.
          </p>
        </div>

        <div className="mb-5">
          <h4 className="fw-semibold mb-3" style={{ color: '#5c2c2c' }}>Key Advantages of PPC</h4>
          <ul style={{ fontSize: '1.05rem' }}>
            <li>🌱 Reduced carbon dioxide emissions during production</li>
            <li>🏝️ Excellent resistance to sulfate and chloride attack</li>
            <li>🍃 Lower heat of hydration reduces cracking in massive pours</li>
            <li>🔧 Good workability and smoother finish</li>
            <li>💵 Often more economical than OPC in large-volume work</li>
          </ul>
        </div>

        <div className="mb-5">
          <h4 className="fw-semibold mb-3" style={{ color: '#5c2c2c' }}>Durability & Long-term Performance</h4>
          <p>
            The pozzolanic reaction continues over time, increasing the density and strength of concrete. PPC's
            lower permeability makes it ideal for structures in water-retaining applications like dams, tanks, and
            sewage treatment.
          </p>
          <p>
            Its resistance to chemical attack from sulfates and chlorides ensures longer life in coastal, marine,
            and industrial environments.
          </p>
        </div>

        <div className="mb-5">
          <h4 className="fw-semibold mb-3" style={{ color: '#5c2c2c' }}>Use Cases & Applications</h4>
          <ul style={{ fontSize: '1.05rem' }}>
            <li>💧 Dams, canals, sewage pipelines, and water tanks</li>
            <li>🏖️ Coastal and marine construction</li>
            <li>🏡 Plastering, flooring, and masonry in residential buildings</li>
            <li>🏢 Commercial structures requiring low heat gain</li>
            <li>🧱 Precast architectural elements benefiting from long-term strength</li>
          </ul>
        </div>

        <div className="mb-5">
          <h4 className="fw-semibold mb-3" style={{ color: '#5c2c2c' }}>Technical Mix & Standards</h4>
          <p>
            PPC is usually blended with 15–35% pozzolana by weight. A typical plaster mix of 1:4 (cement-sand)
            provides excellent workability and finish, while structural mixes like 1:2:4 achieve desired strength
            with better durability.
          </p>
          <p>
            As per IS 1489 (Part 1), PPC shows improved long-term strength—often outperforming OPC at 90 and 180 days.
          </p>
        </div>

        <div className="mb-5">
          <h4 className="fw-semibold mb-3" style={{ color: '#5c2c2c' }}>Environmental Benefits</h4>
          <p>
            Replacing a portion of cement with industrial by-products reduces carbon footprint, conserves energy,
            and minimizes landfill waste. PPC is a key component in green building standards like LEED and GRIHA.
          </p>
          <p>
            The lower heat of hydration also reduces thermal cracking risks, especially in large pours and mass concrete.
          </p>
        </div>

        <div className="mb-5">
          <h4 className="fw-semibold mb-3" style={{ color: '#5c2c2c' }}>Where PPC Makes a Difference</h4>
          <ul style={{ fontSize: '1.05rem' }}>
            <li>🏞️ Water treatment plants and sewage systems</li>
            <li>⛵ Marinas, seawalls, and marine infrastructure</li>
            <li>🏠 Residential buildings with plaster and flooring work</li>
            <li>🏗️ RCC with sustainability goals</li>
            <li>🌇 Urban infrastructure needing lower thermal expansion</li>
          </ul>
        </div>

        <div className="row mb-5 align-items-start">
          <div className="col-md-6 text-center">
            <img
              src="/images/ppc_cement.png"
              alt="PPC Cement Bags"
              className="img-fluid rounded shadow-sm"
              style={{ maxWidth: '100%', maxHeight: '620px', objectFit: 'cover' }}
            />
          </div>

          <div className="col-md-6">
            <h4 className="fw-semibold mb-3" style={{ color: '#5c2c2c' }}>Compatibility & Mix Ratio</h4>
            <p>
              PPC blends well with common admixtures for setting control, waterproofing, and workability. Typical
              structural mixes are 1:2:4, while plaster uses 1:4.
            </p>

            <h4 className="fw-semibold mt-5 mb-3" style={{ color: '#5c2c2c' }}>Sustainability & Future of PPC</h4>
            <p>
              PPC supports circular economy by utilizing industrial by-products. As demand for greener building
              materials rises, PPC remains a key player in sustainable infrastructure.
            </p>
            <p>
              Future trends include increasing pozzolana content, optimizing mix designs, and combining PPC in hybrid
              cement systems for ultra-low emissions.
            </p>
          </div>
        </div>

        <div className="text-center mt-5">
          <h5 className="fw-bold" style={{ color: '#5c2c2c' }}>Curious about which brand suits your needs?</h5>
          <p className="text-muted">
            Discover how top cement brands like KCP and Ultratech compare in compressive strength, grade, setting time,
            and certifications. Make the right choice with real specs side-by-side.
          </p>
          <a
            href="/compare"
            className="btn btn-outline-primary fw-semibold px-4"
            onClick={() => localStorage.setItem('isLoggedIn', 'true')}
          >
            Compare Cement Brands →
          </a>
        </div>
      </div>
    </div>
  );
}

export default PpcPage;
