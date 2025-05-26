import { Container, Row, Col, Card } from "react-bootstrap"
import { FaUser, FaCode, FaLaptopCode, FaUserGraduate } from "react-icons/fa"
import { motion } from "framer-motion"

const About = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 },
    }),
  }

  return (
    <section id="about" className="section bg-light py-5">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="section-title">About Me</h2>
            <p className="lead">
              Motivated Full-Stack Java Developer with practical experience in building secure, responsive web
              applications using Java, Spring Boot, React.js, and MySQL.
            </p>
          </Col>
        </Row>

        <Row>
          {[{
            icon: <FaUser className="text-info" size={40} />,
            title: "Who I Am",
            text: "A passionate Full-Stack Developer based in Pune, Maharashtra with a strong focus on creating efficient and user-friendly applications.",
          },
          {
            icon: <FaCode className="text-info" size={40} />,
            title: "What I Do",
            text: "I develop full-stack applications with a focus on security, performance, and responsive design using modern technologies.",
          },
          {
            icon: <FaLaptopCode className="text-info" size={40} />,
            title: "My Expertise",
            text: "RESTful APIs, authentication systems, database design, and creating intuitive user interfaces with React.js.",
          },
          {
            icon: <FaUserGraduate className="text-info" size={40} />,
            title: "My Background",
            text: "B.Com in Computer Applications graduate with certification in Full-Stack Java Development from SEED Infotech, Pune.",
          }].map((card, i) => (
            <Col md={6} lg={3} className="mb-4" key={i}>
              <motion.div
                className="h-100"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                custom={i}
              >
                <Card className="h-100 text-center p-4 shadow-sm card-hover">
                  <div className="icon-wrapper mb-4 mx-auto">
                    {card.icon}
                  </div>
                  <Card.Body>
                    <Card.Title className="fw-bold mb-3">{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col lg={12}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <Row>
                  <Col md={6} className="mb-4 mb-md-0">
                    <h3 className="h4 mb-4">Personal Details</h3>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item"><FaUser className="me-2 text-info" /> <strong>Name:</strong> Lokesh Bhagwat Nagrikar</li>
                      <li className="list-group-item"><strong>Date of Birth:</strong> 11-Nov-2000</li>
                      <li className="list-group-item"><strong>Phone:</strong> 9309965483</li>
                      <li className="list-group-item"><strong>Email:</strong> lokeshnagrikar14@gmail.com</li>
                      <li className="list-group-item"><strong>Location:</strong> Pune, Maharashtra</li>
                      <li className="list-group-item"><strong>Nationality:</strong> Indian</li>
                      <li className="list-group-item"><strong>Languages:</strong> Marathi, Hindi, English</li>
                    </ul>
                  </Col>
                  <Col md={6}>
                    <h3 className="h4 mb-4">Professional Summary</h3>
                    <p>
                      Motivated Full-Stack Java Developer (Fresher) with practical experience in building secure,
                      responsive web applications using Java, Spring Boot, React.js, and MySQL. Skilled in RESTful APIs,
                      authentication systems, and UI development.
                    </p>
                    <p>
                      Quick learner with strong problem-solving skills and team spirit. Passionate about creating
                      efficient, user-friendly applications and continuously improving my skills in software
                      development.
                    </p>
                    <p><strong>Hobbies:</strong> Playing Volleyball, Music, Dancing</p>
                    <a
                      href="/Lokesh_Nagrikar_Resume.pdf"
                      className="btn btn-outline-info mt-3 fw-bold"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download Resume
                    </a>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
