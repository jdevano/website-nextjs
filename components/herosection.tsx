"use client";
import Carousel from "react-bootstrap/Carousel";

interface Slide {
  title: string;
  subtitle: string;
  imageUrl: string;
}

export default function HeroSection() {
  const slides: Slide[] = [
    {
      title: "Kolaborasi & Inovasi Digital",
      subtitle:
        "Bangun solusi modern dengan performa tinggi untuk bisnis Anda.",
      imageUrl: "/images/banner_01.JPG",
    },
    {
      title: "Teknologi Masa Kini",
      subtitle:
        "Didesain menggunakan Next.js & Bootstrap agar cepat dan elegan.",
      imageUrl: "/images/banner_02.JPG",
    },
    {
      title: "Solusi Web Berkualitas",
      subtitle:
        "Responsif, aman, dan mudah dikembangkan untuk kebutuhan perusahaan Anda.",
      imageUrl: "/images/banner_03.jpg",
    },
  ];

  return (
    <Carousel fade interval={4000} className="hero-carousel">
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          {/* FULL WIDTH BACKGROUND */}
          <div
            className="hero-slide"
            style={{
              backgroundImage: `url(${slide.imageUrl})`,
            }}
          />

          <Carousel.Caption>
            <h1 className="display-3 fw-bold">{slide.title}</h1>
            <p className="lead">{slide.subtitle}</p>
            <button className="btn btn-primary btn-lg px-4 mt-3">
              Explore More
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
