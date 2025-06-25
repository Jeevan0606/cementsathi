import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { getAuth } from 'firebase/auth';

const OtpPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const email = location?.state?.email;

  useEffect(() => {
    if (!email) {
      setStatus('❌ Email not found. Please login again.');
      setTimeout(() => navigate('/login'), 2000);
      return;
    }

    if (location.state?.toastMessage) {
      setStatus(location.state.toastMessage);
      navigate(location.pathname, { replace: true }); // clear state
    }
  }, [location, email, navigate]);

  const handleVerify = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch('https://cementsathi-backend.onrender.com/api/otp/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus(`❌ ${data.message || 'Invalid OTP'}`);
        return;
      }

      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        const name = user.displayName || 'User';
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userName', name);

        setStatus('✅ OTP verified successfully! Redirecting...');
        setTimeout(() => navigate('/'), 1500);
      } else {
        setStatus('❌ User not authenticated. Please login again.');
        setTimeout(() => navigate('/login'), 1500);
      }
    } catch (error) {
      setStatus('❌ Something went wrong while verifying OTP');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#faf3dd', minHeight: '100vh', padding: '30px 0' }}>
      <Container style={{ paddingTop: '50px' }}>
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="p-4 shadow-sm">
              <h3 className="text-center mb-4" style={{ color: '#0d6efd' }}>
                OTP Verification
              </h3>

              {status && (
                <Alert variant={status.startsWith('✅') ? 'success' : 'danger'}>
                  {status}
                </Alert>
              )}

              <Form onSubmit={handleVerify}>
                <Form.Group controlId="formOtp" className="mb-3">
                  <Form.Label>Enter OTP</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter the OTP sent to your email"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button variant="success" type="submit" className="w-100" disabled={submitting}>
                  {submitting ? 'Verifying...' : 'Verify OTP'}
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OtpPage;
