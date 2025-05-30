import { BrowserRouter as Router } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
