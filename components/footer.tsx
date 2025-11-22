"use client";

import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer() {
  return (
    <footer id="footer" className="footer-section bg-dark text-white pt-5 pb-4">
      <Container>
        <Row className="gy-4">
          {/* Products */}
          <Col md={3}>
            <h4 className="fw-bold mb-3">Our Products</h4>
            <ul className="list-unstyled footer-links">
              <li><a href="#">Account</a></li>
              <li><a href="#">Bundle</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Circular</a></li>
            </ul>
          </Col>

          {/* Quick Link */}
          <Col md={3}>
            <h4 className="fw-bold mb-3">Quick Link</h4>
            <ul className="list-unstyled footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Service</a></li>
              <li><a href="#">Work</a></li>
              <li><a href="#">Products</a></li>
            </ul>
          </Col>

          {/* Terms */}
          <Col md={3}>
            <h4 className="fw-bold mb-3">Terms</h4>
            <ul className="list-unstyled footer-links">
              <li><a href="#">Refund Policy</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">License</a></li>
            </ul>
          </Col>

          {/* Search + Social */}
          <Col md={3}>
            <h4 className="fw-bold mb-3">Search Here</h4>
            <Form className="mb-4">
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Search Here"
                  className="footer-search"
                />
                <Button variant="primary">Search</Button>
              </InputGroup>
            </Form>

            <h4 className="fw-bold mb-3">Follow Us</h4>
            <div className="d-flex gap-3">
              <a href="#" className="social-icon"><i className="bi bi-facebook"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-twitter"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-instagram"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-youtube"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-pinterest"></i></a>
            </div>
          </Col>
        </Row>

        {/* COPYRIGHT */}
        <Row>
          <Col className="text-center mt-4">
            <hr className="border-secondary" />
            <p className="mb-0 text-white-50">
              © {new Date().getFullYear()} All rights reserved by <strong>Jeremias Devano</strong>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
