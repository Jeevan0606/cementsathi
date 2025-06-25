import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { getAuth } from 'firebase/auth';

const OtpPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const email = location?.state?.email;

  useEffect(() => {
    if (!email) {
      toast.error('Email not found. Please login again.');
      navigate('/login');
      return;
    }

    if (location.state?.toastMessage) {
      toast.info(location.state.toastMessage);
      navigate(location.pathname, { replace: true }); // clears toastMessage from state
    }
  }, [location, email, navigate]);

  const handleVerify = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch('http://localhost:5000/api/otp/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || 'Invalid OTP');
        return;
      }

      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        const name = user.displayName || 'User';
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userName', name);

        toast.success('OTP verified successfully!');
        navigate('/');
      } else {
        toast.error('User not authenticated. Please login again.');
        navigate('/login');
      }
    } catch (error) {
      toast.error('Something went wrong while verifying OTP');
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
