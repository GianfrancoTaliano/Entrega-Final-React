import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-primary">
    <Container fluid>
      <Navbar.Brand href="#">WorldPadle</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="Home">Home</Nav.Link>
          <Nav.Link href="Paletas">Paletas</Nav.Link>
          <NavDropdown title="Accesorios" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Muñequera</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Protector
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Ver mas
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="d-flex">

          <CartWidget />
          
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
