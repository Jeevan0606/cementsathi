import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

const AppNavbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const userName = localStorage.getItem('userName');

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userName');
        navigate('/login');
      })
      .catch((error) => {
        console.error('Logout error:', error);
      });
  };

  return (
    <Navbar expand="lg" bg="light" variant="light" sticky="top">
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          style={{ color: '#0d6efd', fontWeight: 'bold', fontSize: '25px' }}
        >
          CementSathi
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto my-2 my-lg-0">
            <Nav.Link as={Link} to="/opc">OPC</Nav.Link>
            <Nav.Link as={Link} to="/ppc">PPC</Nav.Link>
            <Nav.Link as={Link} to="/compare">Compare</Nav.Link>
            <Nav.Link as={Link} to="/prices">Prices</Nav.Link>
            <Nav.Link as={Link} to="/faq">FAQs</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>

          <div className="d-flex align-items-center">
            {isLoggedIn ? (
              <>
                <span
                  className="me-3"
                  style={{ color: '#0d6efd', fontWeight: '500', fontSize: '0.95rem' }}
                >
                  Hi, {userName}
                </span>
                <Button variant="outline-danger" size="sm" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button as={Link} to="/login" variant="outline-primary" size="sm" className="me-2">
                  Login
                </Button>
                <Button as={Link} to="/register" variant="primary" size="sm">
                  Register
                </Button>
              </>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
