"use client";

import { Container, Row, Col, Image } from "react-bootstrap";

export default function ServiceSection() {
  const services = [
    {
      icon: "/images/about-icon1.png",
      title: "Service 1",
      desc: "Description of Service 1. High quality service designed to fit your needs.",
    },
    {
      icon: "/images/about-icon2.png",
      title: "Service 2",
      desc: "Description of Service 2. Professional, modern, and reliable.",
    },
    {
      icon: "/images/about-icon3.png",
      title: "Service 3",
      desc: "Description of Service 3. Built with performance and quality in mind.",
    },
  ];

  return (
    <section id="services" className="py-5">
      <Container>
        {/* Section Title */}
        <Row className="text-center mb-5">
          <Col>
            <h2 className="fw-bold section-title">Our Services</h2>
            <p className="text-muted section-subtitle">
              We offer modern and professional services that elevate your brand and business.
            </p>
          </Col>
        </Row>

        {/* Services Grid */}
        <Row className="g-4">
          {services.map((service, index) => (
            <Col md={4} key={index}>
              <div className="service-card shadow-sm p-4 text-center h-100">
                {/* ICON */}
                <div className="service-icon-wrapper mb-3">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    className="service-icon"
                    fluid
                  />
                </div>

                {/* TEXT */}
                <h4 className="fw-semibold mb-2">{service.title}</h4>
                <p className="text-muted">{service.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
