import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [googleHover, setGoogleHover] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const OTP_RESEND_INTERVAL = 60; // in seconds

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);

      // Check last OTP send time from localStorage
      const lastSentTime = localStorage.getItem(`otpSentTime_${email}`);
      const now = Date.now();

      if (lastSentTime && now - parseInt(lastSentTime) < OTP_RESEND_INTERVAL * 1000) {
        const waitTime = OTP_RESEND_INTERVAL - Math.floor((now - parseInt(lastSentTime)) / 1000);
        toast.error(`Please wait ${waitTime} more seconds before requesting a new OTP.`);
        setLoading(false);
        return;
      }

      toast.info('Please wait...');

      // Send OTP
      const res = await fetch('http://localhost:5000/api/otp/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem(`otpSentTime_${email}`, now.toString());
        toast.success('OTP sent successfully!');
        navigate('/otp', {
          state: { email, },
        });
      } else {
        toast.error(data.message || 'Failed to send OTP');
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const name = user.displayName || 'User';

      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userName', name);

      toast.success(`Welcome back, ${name}`);
      navigate('/');
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div style={{ backgroundColor: '#faf3dd', minHeight: '100vh', padding: '30px 0' }}>
    <Container style={{ paddingTop: '50px' }}>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="p-4 shadow-sm">
            <h3 className="text-center mb-4" style={{ color: '#0d6efd' }}>
              Login
            </h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mb-4">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mb-3" disabled={loading}>
                {loading ? 'Sending OTP...' : 'Login'}
              </Button>

              <Button
                className="w-100 d-flex align-items-center justify-content-center gap-2"
                onClick={handleGoogleLogin}
                onMouseEnter={() => setGoogleHover(true)}
                onMouseLeave={() => setGoogleHover(false)}
                style={{
                  backgroundColor: googleHover ? '#0d6efd' : '#ffffff',
                  color: googleHover ? '#ffffff' : '#0d6efd',
                  border: '1px solid #0d6efd',
                  fontWeight: 500,
                  transition: '0.3s',
                }}
              >
                <FcGoogle size={20} /> Sign in with Google
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default LoginPage;
