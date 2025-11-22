"use client";

import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import Link from "next/link";

export default function NavbarComponent() {
  return (
    <Navbar
      id="navbar-main"
      expand="lg"
      fixed="top"
      className="shadow-sm nav-blur py-3"
    >
      <Container>
        {/* LOGO / BRAND */}
        <Link href="#home" className="navbar-brand fw-bold fs-4">
          <span className="text-primary">My</span>Company
        </Link>

        {/* TOGGLER */}
        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className="ms-auto align-items-center">
            <Link href="#home" className="nav-link">Home</Link>
            <Link href="#about" className="nav-link">About</Link>
            <Link href="#services" className="nav-link">Services</Link>
            <Link href="#contact" className="nav-link">Contact</Link>

            {/* SEARCH BAR */}
            <Form className="d-flex ms-3">
              <Form.Control
                type="search"
                placeholder="Search..."
                className="me-2"
                size="sm"
              />
            </Form>

            {/* CTA BUTTON */}
            <Button size="sm" className="ms-2 px-3">
              Get Started
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
