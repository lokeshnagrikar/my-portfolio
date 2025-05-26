"use client"

import { useState, useEffect } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import { FaCode } from "react-icons/fa"

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`py-3 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      } transition-all duration-300 rounded-bottom border-bottom`}
      style={{ zIndex: 999 }}
    >
      <Container>
        <Navbar.Brand
          href="#home"
          className="d-flex align-items-center fw-bold text-dark fs-4"
        >
          <FaCode className="me-2 text-primary" size={26} />
          Lokesh Nagrikar
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {["home", "about", "skills", "projects", "education", "contact"].map((item) => (
              <Nav.Link
                key={item}
                href={`#${item}`}
                className="mx-3 position-relative nav-link-custom text-dark fw-semibold"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>

      <style jsx>{`
        .nav-link-custom::after {
          content: "";
          position: absolute;
          width: 0%;
          height: 2px;
          left: 50%;
          bottom: 0;
          background-color: #0d6efd;
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .nav-link-custom:hover::after {
          width: 100%;
        }

        .nav-link-custom:hover {
          color: #0d6efd !important;
        }

        .nav-link-custom {
          transition: color 0.3s ease;
        }
      `}</style>
    </Navbar>
  )
}

export default Header
