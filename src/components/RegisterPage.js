import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    setStatus(null);

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,}$/;

    if (!passwordRegex.test(password)) {
      setStatus('❌ Password must be at least 6 characters and include 1 uppercase letter, 1 number, and 1 special character.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });

      setStatus('✅ Registered successfully! Redirecting to login...');
      setTimeout(() => navigate('/login'), 1500);
    } catch (err) {
      setStatus(`❌ ${err.message}`);
    }
  };

  return (
    <div style={{ backgroundColor: '#faf3dd', minHeight: '100vh', padding: '30px 0' }}>
      <Container style={{ paddingTop: '50px' }}>
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="p-4 shadow-sm">
              <h3 className="text-center mb-4" style={{ color: '#0d6efd' }}>Register</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Form.Group>

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
                  <Form.Text className="text-muted">
                    Must be at least 6 characters with 1 uppercase, 1 number & 1 special character.
                  </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Register
                </Button>
              </Form>

              {status && (
                <div className="mt-3 text-center fw-semibold" style={{ color: status.startsWith('✅') ? 'green' : 'red' }}>
                  {status}
                </div>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterPage;
