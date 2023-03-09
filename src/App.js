import React from "react";
import "./App.css";
import { Row, Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Services from "./components/Services"

function App() {

  return (
    <Container className="App body" fluid>
      <Row>
        <Navbar />
        <Home />
        <About />
        <Services />
        <Projects />
        <Contact />
      </Row>
    </Container>
  );
}

export default App;
