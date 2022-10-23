import React, { useState } from "react";
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
// pages
import Hero from "./components/Hero";
import Legend from "./components/Legend";
import Section from "./components/Section";
import Activities from "./components/Activities";
import Principles from "./components/Principles";
import Values from "./components/Values";
import Assignment from "./components/Assignment";
import Donate from "./components/Donate";
import Activity from "./components/Activity";
import Testimonial from "./components/Testimonal";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Dropdown from "./components/Dropdown";
import ContactForm from "./components/ContactForm";
// navbar
import Navbar from "./components/Navbar";
// import Final from "./components/components/index";
import GlobalStyle from "./globalstyles";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route exact path="/">
          <Hero />
          <ScrollAnimation animateIn="zoomIn">
            <Legend />
          </ScrollAnimation>
          <Section />
          <Activities />
          <Principles />
          <ScrollAnimation animateIn="slideInRight">
            <Values />
          </ScrollAnimation>
          <Assignment />
          <ScrollAnimation animateIn="slideInLeft">
            <Donate />
          </ScrollAnimation>
          <Activity />
          <Testimonial />
          <Contact />
        </Route>
        <Route path="/ContactForm">
          <ContactForm />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
