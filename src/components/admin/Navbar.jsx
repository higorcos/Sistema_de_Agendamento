
import "../../styles/navbar.css"
import "../../styles/navbar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { AuthContext } from "../../contexts/auth";
import { Navigate } from "react-router-dom";
import { useContext } from "react";

export default function NavbarAdmin(){
  const {logout} = useContext(AuthContext)
  //const navigate = useNavigate()
  const handleLogout = () =>{
    console.log('asd')
    logout()
    Navigate('/')
  }
  return (
    <>  
        <Navbar bg="light" expand='lg' className="sombra-navbar">
          <Container fluid>
            <Navbar.Brand href="/">
            <img
              alt=""
              src="/imagens/logo.svg"
              width="300em"
              height="auto"
              className="nav-logo-left d-inline-block align-top"
            />{' '}
                </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-5">
                  <Nav.Link href="/">Portal</Nav.Link>
                  <NavDropdown
                    title="Painéis"
                    id={`offcanvasNavbarDropdown-expand-lg`}
                  >
                    <NavDropdown.Item href="/admin/noticias/painel">Noticias</NavDropdown.Item>
                    <NavDropdown.Item href="/admin/banner/painel">Banners</NavDropdown.Item>
                    {/* <NavDropdown.Item href="/admin/competencias/painel">Competências</NavDropdown.Item> */}
                   
                  </NavDropdown>
                  <NavDropdown
                    title="Perfil"
                    id={`offcanvasNavbarDropdown-expand-lg`}
                  >
                    <NavDropdown.Item href="/admin/login">Entrar</NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>handleLogout()}>Sair</NavDropdown.Item>
                   
                  </NavDropdown>
                </Nav>
                <Nav>
            <Nav.Link></Nav.Link>
            <Nav.Link ></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              
            </Nav.Link>
          </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>   
    </>
  );
}


