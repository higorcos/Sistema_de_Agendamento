
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
            
          </Container>
        </Navbar>   
    </>
  );
}


