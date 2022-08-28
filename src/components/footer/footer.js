import Container from 'react-bootstrap/Container';
// import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';

function Foots() {
    return (
      <Navbar bg="success" variant="dark" className='fixed-bottom'>
        <Container>
          <Navbar.Brand>Footer Down Here</Navbar.Brand>
        </Container>
      </Navbar>
  );
}

export default Foots;