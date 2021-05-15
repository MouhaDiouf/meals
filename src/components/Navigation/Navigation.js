import "./Navigation.css";
import { LinkContainer } from "react-router-bootstrap";
import { useRef } from "react";
import {
  NavDropdown,
  Navbar,
  Form,
  Nav,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Navigation() {
  const navContainer = useRef(null);
  console.log(navContainer);

  return (
    <Navbar bg="light" expand="lg" ref={navContainer}>
      <LinkContainer to="/">
        <Navbar.Brand> Meals</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/team">
            <Nav.Link>Team</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
