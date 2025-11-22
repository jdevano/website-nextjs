"use client";

import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

export default function ContactSection() {
  return (
    <section id="contact" className="py-5 contact-section bg-light">
      <Container>
        {/* TITLE */}
        <Row className="text-center mb-5">
          <Col>
            <h2 className="fw-bold section-title">Contact Us</h2>
            <p className="text-muted section-subtitle">
              Punya ide project atau ingin konsultasi? Kirim pesan, kami akan balas secepatnya.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="shadow-lg p-4 contact-card border-0">
              <Form>
                {/* NAME */}
                <Form.Group className="mb-4" controlId="formName">
                  <Form.Label className="fw-semibold">Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    className="form-control-custom"
                    required
                  />
                </Form.Group>

                {/* EMAIL */}
                <Form.Group className="mb-4" controlId="formEmail">
                  <Form.Label className="fw-semibold">Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    className="form-control-custom"
                    required
                  />
                </Form.Group>

                {/* MESSAGE */}
                <Form.Group className="mb-4" controlId="formMessage">
                  <Form.Label className="fw-semibold">Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={6}
                    placeholder="Write your message here..."
                    className="form-control-custom"
                    required
                  />
                </Form.Group>

                {/* BUTTON */}
                <div className="text-center">
                  <Button
                    variant="primary"
                    type="submit"
                    size="lg"
                    className="px-5 contact-btn"
                  >
                    Send Message
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
