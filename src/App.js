import React from "react";
import "./App.css";
import { Row, Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Services from "./components/Services"
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

function App() {

// whatsapp chat widget 
// (function(d, s, id){
//   var js, el = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) {return;}
//   js = d.createElement(s); js.id = id;
//   js.src = 'https://widget.rasayel.io/whatsapp/rasayel-waba-widget.iife.js';
//   el.parentNode.insertBefore(js, el);
//   js.onload = function () {
//     var w = window.RasayelWabaWidget;
//     w.create({"title":"Rawy Murgany","subtitle":"Replies within an hour.","message":"Got a problem to solve?","avatar":"full-stack-developer.png","phone":"+201507833501","cta":"Tell me about it"})
//   }
// }(document, 'script', 'rasayel-js'));


  return (
    <Container className="App body" fluid>


<WhatsAppWidget
			phoneNo="201507833501"
			position="right"
			widgetWidth="300px"
			widgetWidthMobile="260px"
			autoOpen={true}
			autoOpenTimer={5000}
			messageBox={true}
			// messageBoxTxt="Hi there, are you available?"
			iconSize="38"
			iconColor="#4d53b3"
			iconBgColor="#c3d4ee"
			headerIcon="full-stack-developer.png"
			// headerIconColor="pink"
			headerTxtColor="#FDFEFF"
			headerBgColor="#6f7bc5"
			headerTitle="Rawy Murgany"
			headerCaption="Online"
			bodyBgColor="#c3d4ee"
			chatPersonName="Support"
			chatMessage={<>Hi there 👋 <br /><br /> How can I help you?</>}
			footerBgColor="#6f7bc5"
			placeholder="Type a message.."
			btnBgColor="yellow"
			btnTxt="Start Chat"
			btnTxtColor="black"
		/>


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
