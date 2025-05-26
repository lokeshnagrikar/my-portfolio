import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap"
import { FaGithub, FaExternalLinkAlt, FaCar, FaUserShield, FaCloudSun } from "react-icons/fa"

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Car Rental Management System",
      description:
        "A full-stack platform with role-based authentication using Spring Security. Admin dashboard to manage cars, bookings, and users. Integrated JWT-based login system for secure access. Users can filter, search, and book available cars.",
      icon: <FaCar />,
      technologies: ["Java", "Spring Boot", "React.js", "MySQL", "JWT", "REST API"],
      githubLink: "https://github.com/lokeshnagrikar",
      liveLink: "",
      image: "/cars.jpg?height=300&width=500",
    },
    {
      id: 2,
      title: "Spring Boot User Authentication System",
      description:
        "Designed and implemented a secure user authentication and role-based access system. Configured Spring Security for login, password encryption, and session handling. Developed RESTful endpoints for user registration, login, and profile. Used JPA with MySQL for data persistence and efficient user management.",
      icon: <FaUserShield />,
      technologies: ["Java", "Spring Boot", "Spring Security", "JPA", "MySQL"],
      githubLink: "https://github.com/lokeshnagrikar",
      liveLink: "#",
      image: "/loginn.jpg?height=300&width=500",
    },
    {
      id: 3,
      title: "Weather Application",
      description:
        "Developed a responsive weather app with real-time API data integration. Implemented autocomplete city search and weather condition-based UI visuals. Managed application state using modern React Hooks. Features error handling and clean loading states.",
      icon: <FaCloudSun />,
      technologies: ["React.js", "Axios", "CSS3", "OpenWeatherMap API"],
      githubLink: "https://github.com/lokeshnagrikar",
      liveLink: "#",
      image: "/weather.webp?height=300&width=500",
    },
  ]

  return (
    <section id="projects" className="section bg-light py-5">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="section-title">Projects</h2>
            <p className="lead">Here are some of the projects I've worked on, showcasing my skills and experience.</p>
          </Col>
        </Row>

        <Row>
          {projects.map((project) => (
            <Col lg={4} md={6} className="mb-4" key={project.id}>
              <Card className="border-0 shadow-sm h-100 project-card">
                <div className="project-image-container position-relative overflow-hidden" style={{ height: "200px" }}>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="card-img-top"
                    style={{ objectFit: "cover", height: "100%", width: "100%" }}
                  />
                  <div className="project-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                    <div className="project-icon text-white bg-info p-3 rounded-circle">{project.icon}</div>
                  </div>
                </div>
                <Card.Body className="p-4">
                  <Card.Title className="h4 mb-3">{project.title}</Card.Title>
                  <Card.Text className="text-muted mb-4">{project.description}</Card.Text>
                  <div className="mb-4">
                    {project.technologies.map((tech, index) => (
                      <Badge bg="light" text="dark" className="me-2 mb-2 py-2 px-3" key={index}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card.Body>
                <Card.Footer className="bg-white border-0 p-4 pt-0">
                  <div className="d-flex gap-2">
                    <Button
                      variant="outline-dark"
                      size="sm"
                      href={project.githubLink}
                      target="_blank"
                      className="d-flex align-items-center"
                    >
                      <FaGithub className="me-2" /> Code
                    </Button>
                    <Button
                      variant="info"
                      size="sm"
                      href={project.liveLink}
                      target="_blank"
                      className="d-flex align-items-center text-white"
                    >
                      <FaExternalLinkAlt className="me-2" /> Live Demo
                    </Button>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Projects
