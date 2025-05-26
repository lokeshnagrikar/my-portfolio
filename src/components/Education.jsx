import { Container, Row, Col, Card } from "react-bootstrap"
import { FaGraduationCap, FaUserGraduate, FaSchool, FaCertificate } from "react-icons/fa"

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "B.Com in Computer Applications (B.C.C.A)",
      institution: "Rashtrasant Tukadoji Maharaj Nagpur University (RTMNU), Nagpur",
      year: "2018 - 2021",
      icon: <FaGraduationCap />,
    },
    {
      id: 2,
      degree: "12th (HSC)",
      institution: "Pandharibapu Deshmukh Arts & Science College, Mahagaon",
      year: "2017 - 2018",
      icon: <FaUserGraduate />,
    },
    {
      id: 3,
      degree: "10th (SSC)",
      institution: "Baburao Madavi School, Deori",
      year: "2015 - 2016",
      icon: <FaSchool />,
    },
  ]

  const certifications = [
    {
      id: 1,
      name: "Full-Stack Java Development",
      issuer: "SEED Infotech, Pune",
      year: "2023",
      icon: <FaCertificate />,
    },
  ]

  return (
    <section id="education" className="section py-5">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="section-title">Education & Certifications</h2>
            <p className="lead">My academic background and professional certifications that have shaped my skills.</p>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg={12}>
            <h3 className="h4 mb-4 text-center">Education</h3>
            <div className="timeline position-relative">
              {education.map((item, index) => (
                <Card
                  key={item.id}
                  className={`border-0 shadow-sm mb-4 timeline-item ${index % 2 === 0 ? "timeline-left" : "timeline-right"}`}
                  style={{ maxWidth: "800px", margin: "0 auto" }}
                >
                  <Card.Body className="p-4">
                    <Row className="align-items-center">
                      <Col md={2} className="text-center mb-3 mb-md-0">
                        <div
                          className="timeline-icon bg-info text-white rounded-circle d-inline-flex align-items-center justify-content-center"
                          style={{ width: "60px", height: "60px" }}
                        >
                          {item.icon}
                        </div>
                      </Col>
                      <Col md={10}>
                        <h4 className="h5 mb-2">{item.degree}</h4>
                        <p className="mb-1">{item.institution}</p>
                        <p className="text-muted mb-0">{item.year}</p>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <h3 className="h4 mb-4 text-center">Certifications</h3>
            <Row className="justify-content-center">
              {certifications.map((cert) => (
                <Col md={6} lg={4} key={cert.id}>
                  <Card className="border-0 shadow-sm h-100 text-center p-4">
                    <div className="cert-icon mb-4 mx-auto">
                      <div
                        className="bg-info text-white rounded-circle d-inline-flex align-items-center justify-content-center"
                        style={{ width: "70px", height: "70px" }}
                      >
                        {cert.icon}
                      </div>
                    </div>
                    <Card.Body>
                      <Card.Title className="h5 mb-3">{cert.name}</Card.Title>
                      <Card.Text className="mb-1">{cert.issuer}</Card.Text>
                      <Card.Text className="text-muted">{cert.year}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Education
