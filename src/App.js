import React from "react";
import "./App.css";
import { Row, Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Services from "./components/Services";
// import Offer from "./components/Offer";

import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

function App() {

  return (
    <Container className="App body" fluid>		    
      <WhatsAppWidget
        phoneNo="201507833501"
        position="right"
        widgetWidth="300px"
        widgetWidthMobile="220px"
        autoOpen={true}
        autoOpenTimer={5000}
        messageBox={true}
        // messageBoxTxt=""
        iconSize="38"
        iconColor="#FDFEFF"
        iconBgColor="#25D366"
		// iconBgColor="#FFFF00"
        // headerIcon="favicon.ico"
        headerIconColor="#4d53b3"
        headerTxtColor="#4d53b3"
        headerBgColor="#FDFEFF"
        headerTitle="Rawy Murgany"
        headerCaption="Online"
        bodyBgColor="#c3d4ee"
        chatPersonName="Rawy"
        chatMessage={
          <>
            Hi there 👋 <br /><br /> 
            Got a problem to solve ? 
          </>
        }
        footerBgColor="#FDFEFF"
        placeholder="Type a message.."
        btnBgColor="#25D366"
        btnTxt="WhatsApp me"
        btnTxtColor="#25D366"
      />

      <Row>
        <Navbar />
        <Home />
        <About />
        <Services />
		{/* <Offer /> */}
        <Projects />
        <Contact />
      </Row>
    </Container>
  );
}

export default App;
