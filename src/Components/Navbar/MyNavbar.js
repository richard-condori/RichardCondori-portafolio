import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./MyNavbar.css"

function MyNavbar () {
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <NavLink to="/" className="home">Portafolio</NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav"/>
                    <Nav className="me-auto">
                        <NavLink to="/aboutme" className="myNavLink">
                            Acerca de mi    
                        </NavLink>
                        <NavLink to="/skills" className="myNavLink">
                            Habilidades
                        </NavLink>
                        <NavLink to="/proyects" className="myNavLink">
                            Proyectos
                        </NavLink>
                        <NavLink to="/experience" className="myNavLink">
                                Experiencia Laboral
                        </NavLink>
                        <NavLink to="/education" className="myNavLink">
                            Educación
                        </NavLink>
                        <NavLink to="/contact" className="myNavLink">
                            Contacto
                        </NavLink>
                    </Nav>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;