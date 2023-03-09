import React from "react";
import { Container } from "react-bootstrap";
import ReadMore from "./ReadMore";
import Skills from "./Skills";
import { aboutMeData } from "../data";

const About = () => {
  return (
    <Container id="about" className="light-bg dark-text justify-content-center">
      <div className="pad justify-content-center mt-5 mb-5">
        <div className="row page-scaler pt-5 justify-content-center responsive-text">
          <div className="mt-5 col-12 col-sm-11 col-md-6 col-lg-6 items-center">
            <div className="text-center mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="#4d53b3"
                className="bi bi-person-check"
                viewBox="0 0 16 16"
              >
                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                <path
                  fillRule="evenodd"
                  d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                />
              </svg>
              <h1 className="blue-text headers mt-3">ABOUT ME</h1>
            </div>
            <ReadMore>{aboutMeData.about_me_data}</ReadMore>
          </div>

          <div className="mt-5 col-12 col-sm-12 col-md-6 col-lg-6 responsive-text">
            <Skills />
          </div>
        </div>
      </div>

      <div className="pad row mb-5 m-auto">
        <div className="pt-5 pb-5 white-bg page-scaler rounded justify-content-center mb-5 responsive-text pb-3 dark-text ">
          <div className="col-sm-12 col-md-9 m-auto mt-5">
            <div className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="#4d53b3"
                className="bi bi-award"
                viewBox="0 0 16 16"
              >
                <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
              </svg>
              <h5 className="text-center blue-text headers mb-5 mt-3">
                CERTIFICATIONS
              </h5>
            </div>
            <p>
              Web Application Technologies and Django | Univerity of Michigan |
              Coursera <br />
              <a
                href="https://coursera.org/verify/6XAU6YYHL6LQ"
                target={"_blank"}
                rel="noreferrer"
                className=""
              >
                {" "}
                Verify Certificate
              </a>
            </p>
            <p>
              Python for Data Science, AI & Development | IBM | Coursera
              <br />
              <a
                href="https://coursera.org/verify/CR6ZZ8AHDX2B"
                target={"_blank"}
                rel="noreferrer"
              >
                {" "}
                Verify Certificate
              </a>
            </p>
            <p>
              Data Collection and Processing with Python | Univerity of Michigan
              | Coursera <br />
              <a
                href="https://coursera.org/verify/QNX7XVQQLAZY"
                target={"_blank"}
                rel="noreferrer"
              >
                {" "}
                Verify Certificate
              </a>
            </p>
            <p>
              Python Classes and Inheritance | Univerity of Michigan | Coursera{" "}
              <br />
              <a
                href="https://coursera.org/verify/LNPKV5UU692H"
                target={"_blank"}
                rel="noreferrer"
              >
                {" "}
                Verify Certificate
              </a>
            </p>
            <p>
              Python Funstions, Files and Dictionaries | Univerity of Michigan |
              Coursera <br />
              <a
                href="https://coursera.org/verify/FN4R9PR5YEJN"
                target={"_blank"}
                rel="noreferrer"
              >
                {" "}
                Verify Certificate
              </a>
            </p>
            <p>
              Python Basics | Univerity of Michigan | Coursera <br />
              <a
                href="https://coursera.org/verify/6H4XP8VVAF2S"
                target={"_blank"}
                rel="noreferrer"
              >
                {" "}
                Verify Certificate
              </a>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
