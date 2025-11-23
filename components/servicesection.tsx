"use client";

import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

export default function ServiceSection() {
  const services = [
  {
    icon: "/images/about-icon1.png",
    title: "Full-Stack Web Development",
    desc: "Kami menyediakan layanan pembuatan website modern yang cepat, aman, dan responsif. Dibangun dengan teknologi terbaru untuk mendukung kebutuhan bisnis digital Anda.",
  },
  {
    icon: "/images/about-icon2.png",
    title: "Interface & System Optimization",
    desc: "Kami merancang tampilan antarmuka yang profesional, intuitif, dan estetik untuk meningkatkan pengalaman pengguna serta memaksimalkan efektivitas bisnis Anda.",
  },
  {
    icon: "/images/about-icon3.png",
    title: "Technical Support & Maintenance",
    desc: "Layanan dukungan teknis profesional untuk memastikan sistem Anda berjalan lancar. Mulai dari troubleshooting, monitoring, hingga bantuan jarak jauh.",
  },
];


  return (
    <section id="services" className="py-5">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="fw-bold section-title">Our Services</h2>
            <p className="text-muted section-subtitle">
              Kami menawarkan layanan modern dan profesional yang meningkatkan merek dan bisnis Anda.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {services.map((service, index) => (
            <Col key={index} md={4}>
              <div className="service-card shadow-sm p-4 text-center h-100">
                
                <div className="service-icon-wrapper mb-3">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={110}
                    height={110}
                    className="service-icon-img"
                  />
                </div>

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
