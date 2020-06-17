import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/NavBar'
import Nav from 'react-bootstrap/Nav'
import Footer from '../src/components/Footer'
import './App.css';
import HomePage from "../src/pages/HomePage";
import AboutPage from "../src/pages/AboutPage";
import ContactPage from "../src/pages/ContactPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Teresa Campos",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        title: "Creativity is just connecting things",
        subtitle: "Passion, Patience, Persistance",
        text: "Check my projects below:",
      },
      about: {
        title: "About Me",
      },
      contact: {
        title: "Let's Chat!",
      },
    };
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Teresa Campos</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => ( <HomePage title={this.state.home.title} subtitle={this.state.home.subtitle} text={this.state.home.text} /> )}/>
          <Route path="/about" render={() => ( <AboutPage title={this.state.about.title} subtitle={this.state.about.subtitle} text={this.state.about.text} /> )}/>
          <Route path="/contact" render={() => ( <ContactPage title={this.state.contact.title} subtitle={this.state.contact.subtitle} text={this.state.contact.text} /> )}/>
        
          <Footer />
        </Container>
      </Router>
    );
  }
}


export default App;
