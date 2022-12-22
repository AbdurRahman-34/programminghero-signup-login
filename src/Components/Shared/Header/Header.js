import React from "react";
import {Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState} from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import logo from '../../../../src/images/logo.svg'
import { signOut } from 'firebase/auth';
import auth from "../../../firebase.init";
import './Header.css'

const Header = () => {
  const [user] = useAuthState(auth)
  const handelLogOut = () => {
    signOut(auth)
  }
  return (
    <div className="main-header">
      <Navbar collapseOnSelect expand="lg"  variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/"><img src={logo} alt="" /> Programming Hero</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/about">About Us</Nav.Link>
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
              {
                user
                ?
                <Nav.Link className="logout" onClick={handelLogOut}>SignOut</Nav.Link>
                :
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
