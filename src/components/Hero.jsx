import { Container, Row, Col } from "react-bootstrap"
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa"

const Hero = () => {
  return (
    <section
      id="home"
      className="hero-section d-flex align-items-center min-vh-100 position-relative text-white"
      style={{
        background: "linear-gradient(135deg, #1e3c72, #2a5298)",
        overflow: "hidden",
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-5 mb-lg-0">
            <h1 className="display-4 fw-bold mb-3">
              Hi, I'm <span className="text-info">Lokesh Nagrikar</span>
            </h1>
            <h2 className="h4 mb-3 text-light">Full-Stack Java Developer</h2>
            <p className="lead mb-4">
              I craft modern, secure, and scalable web applications using Java, Spring Boot, React.js, and MySQL.
            </p>
            <div className="d-flex flex-wrap gap-3 mb-4">
              <a href="#contact" className="btn btn-info px-4 py-2 rounded-pill fw-bold shadow-sm">
                📩 Contact Me
              </a>
              <a href="#projects" className="btn btn-outline-light px-4 py-2 rounded-pill fw-bold shadow-sm">
                💼 View Projects
              </a>
            </div>
            <div className="d-flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4 hover-scale"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4 hover-scale"
              >
                <FaLinkedin />
              </a>
              <a href="mailto:lokeshnagrikar14@gmail.com" className="text-white fs-4 hover-scale">
                <FaEnvelope />
              </a>
            </div>
          </Col>

          <Col lg={6} className="text-center">
            <div
              className="hero-image-container position-relative mx-auto"
              style={{ maxWidth: "360px", transition: "transform 0.3s ease" }}
            >
              <div
                className="hero-image-border position-absolute top-0 start-0 w-100 h-100 border-4 border-info rounded-circle"
                style={{ transform: "translate(15px, 15px)", zIndex: 0 }}
              ></div>
              <img
                src=".\lokesh-profile.jpg"
                alt="Lokesh Nagrikar"
                className="img-fluid rounded-circle border-4 border-white shadow-lg"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  zIndex: 1,
                  position: "relative",
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)"
                  e.currentTarget.style.boxShadow = "0 12px 28px rgba(0, 0, 0, 0.4)"
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)"
                  e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)"
                }}
              />
            </div>
          </Col>
        </Row>

        <div className="scroll-down text-center position-absolute bottom-0 start-50 translate-middle-x pb-4">
          <a href="#about" className="text-white fs-3 animate-bounce">
            <FaArrowDown />
          </a>
        </div>
      </Container>

      <style jsx>{`
        .hover-scale {
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .hover-scale:hover {
          transform: scale(1.2);
          color: #0dcaf0;
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </section>
  )
}

export default Hero
