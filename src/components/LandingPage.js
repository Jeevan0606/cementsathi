import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Fade, Zoom } from 'react-awesome-reveal';

const LandingPage = () => {
  return (
    <div style={{ backgroundColor: '#faf3dd', minHeight: '100vh', padding: '30px 0' }}>
      <Container>

        {/* Header Section */}
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <Fade direction="left" triggerOnce>
              <h1 style={{ color: '#0d6efd', fontWeight: 'bold', fontSize: '22px' }}>Know your Cement</h1>
              <h4 style={{ color: '#5c2c2c', fontSize: '22px' }}>Build with Trust, Build with Insight</h4>
              <p style={{ color: '#198754', fontSize: '1.1rem' }}>
                Confused about OPC vs PPC? We help you pick the right cement for your project.
              </p>
              <Button variant="warning">Explore More</Button>
            </Fade>
          </Col>
          <Col md={6}>
            <Fade direction="right" triggerOnce>
              <img
                src="/images/cement.jpg"
                alt="Cement Banner"
                style={{
                  width: '100%',
                  maxHeight: '400px',
                  objectFit: 'cover',
                  borderRadius: '10px'
                }}
              />
            </Fade>
          </Col>
        </Row>

        {/* OPC Cement Card */}
        <Row className="mb-4">
          <Col md={6}>
            <Zoom triggerOnce>
              <Card bg="light" border="primary">
                <Card.Body>
                  <Card.Title style={{ color: '#fd7e14' }}>What is OPC Cement?</Card.Title>
                  <Card.Text>
                    Ordinary Portland Cement (OPC) is best for slabs and fast-setting concrete needs.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Zoom>
          </Col>
        </Row>

        {/* OPC vs PPC Image */}
        <Row className="justify-content-center mb-4">
          <Col md={8} className="d-flex justify-content-center">
            <Fade direction="up" triggerOnce>
              <img
                src="/images/opc-vs-ppc.jpg"
                alt="OPC vs PPC Comparison"
                style={{
                  width: '100%',
                  maxWidth: '500px',
                  borderRadius: '10px',
                  objectFit: 'cover'
                }}
              />
            </Fade>
          </Col>
        </Row>

        {/* PPC Cement Card */}
        <Row className="justify-content-end">
          <Col md={6}>
            <Zoom triggerOnce>
              <Card bg="light" border="success">
                <Card.Body>
                  <Card.Title style={{ color: '#198754' }}>What is PPC Cement?</Card.Title>
                  <Card.Text>
                    Portland Pozzolana Cement (PPC) is best for plastering, brickwork, and long-term strength.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Zoom>
          </Col>
        </Row>

        {/* === Did You Know Section === */}
        <section style={{ backgroundColor: '#fff3cd', padding: '50px 0', marginTop: '60px' }}>
          <Container>
            <Fade direction="up" triggerOnce>
              <h3 className="text-center fw-bold mb-5">
                <span role="img" aria-label="brain">🧠</span>
                <span style={{ color: '#5c2c2c' }}>Did You Know?</span>
              </h3>
            </Fade>
            <Row className="text-center">
              <Col md={3} className="mb-4">
                <Zoom triggerOnce delay={50}>
                  <div className="card-shine p-3 border rounded bg-white shadow-sm h-100 d-flex flex-column justify-content-between">
                    <h6 className="fw-semibold mb-2" style={{ color: '#5c2c2c' }}>Cement Needs a Dry Bed</h6>

                    <p className="small mb-0">
                      Storing cement on bare floors can cause it to absorb moisture from the ground. Always place bags on wooden planks or pallets.
                    </p>
                  </div>
                </Zoom>
              </Col>
              <Col md={3} className="mb-4">
                <Zoom triggerOnce delay={150}>
                  <div className="card-shine p-3 border rounded bg-white shadow-sm h-100 d-flex flex-column justify-content-between">
                    <h6 className="fw-semibold mb-2" style={{ color: '#5c2c2c' }}>Chemicals Can Destroy It</h6>
                    <p className="small mb-0">
                      Cement is highly reactive. Acids, alkalis, and even salts in the air can attack it over time, weakening its structure and durability.
                    </p>
                  </div>
                </Zoom>
              </Col>
              <Col md={3} className="mb-4">
                <Zoom triggerOnce delay={250}>
                  <div className="card-shine p-3 border rounded bg-white shadow-sm h-100 d-flex flex-column justify-content-between">
                    <h6 className="fw-semibold mb-2" style={{ color: '#5c2c2c' }}>Rain Triggers Hydration</h6>
                    <p className="small mb-0">
                      Even slight rain or humidity can start the setting process inside the bag, making the cement lumpy and unusable.
                    </p>
                  </div>
                </Zoom>
              </Col>
              <Col md={3} className="mb-4">
                <Zoom triggerOnce delay={350}>
                  <div className="card-shine p-3 border rounded bg-white shadow-sm h-100 d-flex flex-column justify-content-between">
                    <h6 className="fw-semibold mb-2" style={{ color: '#5c2c2c' }}>Sulphates = Silent Killers</h6>
                    <p className="small mb-0">
                      Sulphates in soil and water can cause expansion and cracking in cement structures over time if not protected.
                    </p>
                  </div>
                </Zoom>
              </Col>
            </Row>
          </Container>
        </section>

      </Container>

      {/* === CSS for Shine Animation === */}
      <style>{`
        .card-shine {
          position: relative;
          overflow: hidden;
        }

        .card-shine::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0) 30%,
            rgba(255, 255, 255, 0.5) 50%,
            rgba(255, 255, 255, 0) 70%
          );
          transform: rotate(0deg);
          animation: shimmer 2.5s infinite;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%) rotate(25deg);
          }
          100% {
            transform: translateX(100%) rotate(25deg);
          }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
