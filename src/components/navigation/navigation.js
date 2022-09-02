import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import cornerLogo from './NewLogo.png';

import './navigation.css'

function Navigation() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
      <Navbar.Brand href="/">
            <img
              alt=""
              src={cornerLogo}
              width="100"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" id="bold-link">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/starthere">Start Here</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;