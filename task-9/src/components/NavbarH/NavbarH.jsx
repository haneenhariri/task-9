import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

export default function NavbarH() {
  return (
    <section>
        <Navbar expand='md' className="nav navbar-dark py-2 bg-dark px-lg-5 px-md-3 px-sm-2">
            <Navbar.Brand href="#" className="text-primary fs-2">
              <FontAwesomeIcon icon={faUtensils} /> Restoran
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end" className='navbar-dark  bg-dark'
            >
              <Offcanvas.Header closeButton >
                <Offcanvas.Title  id={`offcanvasNavbarLabel-expand-md`} className=" text-primary fs-2">
                  <FontAwesomeIcon icon={faUtensils} /> Restoran
                </Offcanvas.Title>
              </Offcanvas.Header>
              
              <Offcanvas.Body>
                <Nav className="justify-content-end flex w-100 ">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/serv">Service</Nav.Link>
                  <Nav.Link href="/menu">Menu</Nav.Link>
                  <NavDropdown
                    title="Order"
                    id={`offcanvasNavbarDropdown-expand-md`}
                  >
                      <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/Contact">Contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Navbar>
    </section>
  )
}
