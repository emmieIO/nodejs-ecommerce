/* eslint-disable react/no-unescaped-entities */
import { Container, Nav, Navbar} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const NavBar = () => {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      className="bg-dark navbar-dark bg-dark"
      collapseOnSelect
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <h2>
              <i className="fas fa-shop"></i>Kachi's shop
            </h2>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" id="header_nav">
            <LinkContainer to="/cart">
              <Nav.Link>
                <i className="fas fa-shopping-basket"></i> Cart
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
            <Nav.Link>
              <i className="fas fa-login"></i>{" "}
              <i className="fas fa-right-to-bracket"></i> Sign in
            </Nav.Link>
            </LinkContainer>
            {/* <NavDropdown title="profile" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
