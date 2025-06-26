import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Card, Alert } from 'react-bootstrap';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState(null);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const navigate = useNavigate();

  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,}$/;

  useEffect(() => {
    setIsPasswordValid(passwordRegex.test(password));
  }, [password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    setStatus(null);

    if (!isPasswordValid) {
      setStatus('❌ Invalid password format.');
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
                  <div
                    style={{
                      fontSize: '0.85rem',
                      marginTop: '6px',
                      padding: '6px 10px',
                      borderRadius: '4px',
                      border: `1px solid ${
                        password === ''
                          ? 'transparent'
                          : isPasswordValid
                          ? '#198754'
                          : '#dc3545'
                      }`,
                      backgroundColor:
                        password === ''
                          ? 'transparent'
                          : isPasswordValid
                          ? '#d1e7dd'
                          : '#f8d7da',
                      color:
                        password === ''
                          ? '#6c757d'
                          : isPasswordValid
                          ? '#0f5132'
                          : '#842029',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Password must be strong (6+ chars, 1 uppercase, 1 number, 1 special char).
                  </div>

                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Register
                </Button>
              </Form>

              {status && (
                <Alert
                  variant={status.startsWith('✅') ? 'success' : 'danger'}
                  className="mt-3 text-center fw-semibold py-2"
                >
                  {status}
                </Alert>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterPage;
