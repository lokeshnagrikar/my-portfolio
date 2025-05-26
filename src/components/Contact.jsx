import { Container, Row, Col, Form, Button, Card } from "react-bootstrap"
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa"

const Contact = () => {
  return (
    <section id="contact" className="section bg-light py-5">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="section-title">Get In Touch</h2>
            <p className="lead">Feel free to contact me for any work or suggestions.</p>
          </Col>
        </Row>

        <Row>
          <Col lg={5} className="mb-4 mb-lg-0">
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="p-4">
                <h3 className="h4 mb-4">Contact Information</h3>
                <p className="text-muted mb-4">
                  I'm open for new opportunities and collaborations. Feel free to reach out to me through any of the
                  following channels.
                </p>

                <div className="contact-info">
                  <div className="d-flex mb-4">
                    <div className="contact-icon me-3">
                      <div
                        className="bg-info text-white rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: "45px", height: "45px" }}
                      >
                        <FaEnvelope />
                      </div>
                    </div>
                    <div>
                      <h4 className="h6 mb-1">Email</h4>
                      <p className="mb-0">
                        <a href="mailto:lokeshnagrikar14@gmail.com" className="text-decoration-none text-muted">
                          lokeshnagrikar14@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="d-flex mb-4">
                    <div className="contact-icon me-3">
                      <div
                        className="bg-info text-white rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: "45px", height: "45px" }}
                      >
                        <FaPhone />
                      </div>
                    </div>
                    <div>
                      <h4 className="h6 mb-1">Phone</h4>
                      <p className="mb-0">
                        <a href="tel:9309965483" className="text-decoration-none text-muted">
                          +91 9309965483
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="d-flex">
                    <div className="contact-icon me-3">
                      <div
                        className="bg-info text-white rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: "45px", height: "45px" }}
                      >
                        <FaMapMarkerAlt />
                      </div>
                    </div>
                    <div>
                      <h4 className="h6 mb-1">Location</h4>
                      <p className="mb-0 text-muted">Pune, Maharashtra, India</p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={7}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h3 className="h4 mb-4">Send Me a Message</h3>
                <Form>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="formName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" required />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="formEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" required />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3" controlId="formSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Enter subject" required />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="Enter your message" required />
                  </Form.Group>

                  <Button variant="info" type="submit" className="text-white px-4 py-2 d-flex align-items-center">
                    <FaPaperPlane className="me-2" /> Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
