import { Container, Row, Col } from "react-bootstrap"
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaHeart } from "react-icons/fa"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row className="justify-content-center text-center mb-4">
          <Col md={8}>
            <h2 className="h4 mb-4">Lokesh Nagrikar</h2>
            <p className="mb-4">
              Full-Stack Java Developer specializing in building secure, responsive web applications.
            </p>
            <div className="social-icons d-flex justify-content-center gap-4 mb-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
                <FaLinkedin />
              </a>
              <a href="mailto:lokeshnagrikar14@gmail.com" className="text-white fs-4">
                <FaEnvelope />
              </a>
            </div>
          </Col>
        </Row>
        <hr className="my-4 bg-secondary" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">
              <small>&copy; {currentYear} Lokesh Nagrikar. All rights reserved.</small>
            </p>
            <p className="mt-2">
              <small>
                Made with <FaCode className="mx-1" /> and <FaHeart className="mx-1 text-danger" />
              </small>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
