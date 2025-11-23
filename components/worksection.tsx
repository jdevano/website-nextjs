"use client";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";

export default function WorkSection() {
  const works = [
    {
      title: "Premium Outdoor Content Production",
      desc: "Kami menyediakan layanan produksi foto dan video outdoor berkualitas tinggi untuk kebutuhan branding, pariwisata, serta konten kreatif profesional. Menghadirkan visual alami yang estetik, tajam, dan memikat.",
      image: "/images/image-44.jpg",
    },
    {
      title: "Adventure & Travel Visual Development",
      desc: "Kami membantu brand menciptakan identitas visual bertema travel & adventure yang modern dan cinematic. Cocok untuk perusahaan tour, campaign outdoor, ataupun konten storytelling.",
      image: "/images/image-45.jpg",
    },
    {
      title: "Scenic Branding & Landscape Photography",
      desc: "Layanan fotografi pemandangan premium untuk website perusahaan, katalog, hingga kebutuhan branding visual yang elegan dan profesional untuk pengalaman yang lebih baik.",
      image: "/images/image-46.jpg",
    },
  ];

  return (
    <section
      id="work"
      className="py-5"
      style={{ backgroundColor: "#fff" }}
    >

      <Container>
        <Row className="text-center mb-4">
          <Col>
            <h2 className="fw-bold display-5 mb-2">Our Creative Works</h2>
            <p className="text-muted fs-5">
              Menghadirkan konten visual berkualitas tinggi untuk mendukung brand, website, dan kebutuhan digital modern.
            </p>
          </Col>
        </Row>

        <Row>
          {works.map((item, index) => (
            <Col md={4} className="mb-4" key={index}>
              <Card className="work-card shadow-sm border-0">
                <div className="work-img-wrapper">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="work-img"
                  />
                </div>

                <Card.Body>
                  <Card.Title className="fw-bold">{item.title}</Card.Title>
                  <Card.Text className="text-muted">{item.desc}</Card.Text>

                  <Button variant="primary" className="px-3">
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
