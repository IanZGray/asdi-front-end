import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import cornerLogo from './cornerLogo.png';

function Navigation() {
  return (
    <Navbar bg="success" variant="dark">
      <Container>
      <Navbar.Brand href="/">
            <img
              alt=""
              src={cornerLogo}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            Plant Here
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/starthere">Start Here</Nav.Link>
            <Nav.Link href="ourstory">Our Story</Nav.Link>
            <Nav.Link href="testing">Test Functions</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;