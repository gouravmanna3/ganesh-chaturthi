import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./Header.css";

const Header = () => {
  return (
    <Navbar bg="orange">
      <Container>
        <Navbar.Brand href="#home">Shri Ganesh Utsav Samithi Inc</Navbar.Brand>

        <Nav className="justify-content-end">
          <Nav.Link href="#home">Events</Nav.Link>
          <Nav.Link href="#features">Volunteering</Nav.Link>
          <Nav.Link href="#pricing">Donations</Nav.Link>
          <Nav.Link href="#home">About Us</Nav.Link>
          <Nav.Link href="#features">Contact Us</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
