import React from "react"
import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap"
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaTools,
  FaGitAlt,
} from "react-icons/fa"

const Skills = () => {
  const frontendSkills = [
    { name: "HTML5", icon: <FaHtml5 />, percentage: 90 },
    { name: "CSS3", icon: <FaCss3Alt />, percentage: 85 },
    { name: "JavaScript", icon: <FaJs />, percentage: 80 },
    { name: "React.js", icon: <FaReact />, percentage: 75 },
    { name: "Bootstrap", icon: null, percentage: 85 },
    { name: "Tailwind CSS", icon: null, percentage: 70 },
  ]

  const backendSkills = [
    { name: "Java", icon: <FaJava />, percentage: 85 },
    { name: "Spring Boot", icon: null, percentage: 80 },
    { name: "Spring Security", icon: null, percentage: 75 },
    { name: "Node.js", icon: <FaNodeJs />, percentage: 70 },
    { name: "Express.js", icon: null, percentage: 65 },
    { name: "RESTful APIs", icon: null, percentage: 80 },
  ]

  const databaseSkills = [
    { name: "MySQL", icon: <FaDatabase />, percentage: 85 },
    { name: "MongoDB", icon: <FaDatabase />, percentage: 75 },
    { name: "JPA/Hibernate", icon: null, percentage: 80 },
  ]

  const toolsSkills = [
    { name: "Git & GitHub", icon: <FaGitAlt />, percentage: 80 },
    { name: "Postman", icon: null, percentage: 85 },
  ]

  const renderSkills = (skills) =>
    skills.map((skill, index) => (
      <div key={index} className="mb-4">
        <div className="d-flex align-items-center mb-2">
          {skill.icon && <span className="me-2 text-info">{skill.icon}</span>}
          <span className="fw-bold">{skill.name}</span>
          <span className="ms-auto">{skill.percentage}%</span>
        </div>
        <ProgressBar
          now={skill.percentage}
          variant="info"
          style={{ height: "8px", borderRadius: "4px" }}
        />
      </div>
    ))

  return (
    <section id="skills" className="section py-5">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="section-title">Technical Skills</h2>
            <p className="lead">
              My technical toolkit includes a variety of languages, frameworks, and tools that I use to build robust and efficient applications.
            </p>
          </Col>
        </Row>

        <Row>
          {/* Frontend Skills */}
          <Col lg={6} className="mb-4">
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="p-4">
                <div className="d-flex align-items-center mb-4">
                  <FaHtml5 className="text-info me-3" size={30} />
                  <h3 className="h4 mb-0">Frontend Development</h3>
                </div>
                {renderSkills(frontendSkills)}
              </Card.Body>
            </Card>
          </Col>

          {/* Backend Skills */}
          <Col lg={6} className="mb-4">
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="p-4">
                <div className="d-flex align-items-center mb-4">
                  <FaServer className="text-info me-3" size={30} />
                  <h3 className="h4 mb-0">Backend Development</h3>
                </div>
                {renderSkills(backendSkills)}
              </Card.Body>
            </Card>
          </Col>

          {/* Database Skills */}
          <Col lg={6} className="mb-4">
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="p-4">
                <div className="d-flex align-items-center mb-4">
                  <FaDatabase className="text-info me-3" size={30} />
                  <h3 className="h4 mb-0">Database & ORM</h3>
                </div>
                {renderSkills(databaseSkills)}
              </Card.Body>
            </Card>
          </Col>

          {/* Tools & Utilities */}
          <Col lg={6} className="mb-4">
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="p-4">
                <div className="d-flex align-items-center mb-4">
                  <FaTools className="text-info me-3" size={30} />
                  <h3 className="h4 mb-0">Tools & Utilities</h3>
                </div>
                {renderSkills(toolsSkills)}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Skills
