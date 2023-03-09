import React, { useState, useEffect } from "react";
import { skills } from "../data";
import { Col, Row, Container } from "react-bootstrap";
import { ShowMore } from "./ShowMore";
import ProgressBar from "react-bootstrap/ProgressBar";

const Skills = () => {
  const [data, setData] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [index, setIndex] = useState(4);
  const initialPosts = ShowMore(data, 0, index);

  const loadMore = () => {
    setIndex(index + 10);
    if (index >= skills.length) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  };
  useEffect(() => {
    setData(skills);
  }, []);

  return (
    <Container id="skills" className="justify-content-center p-0">
      <Row className="text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          fill="#4d53b3"
          className="bi bi-cpu text-center"
          viewBox="0 0 16 16"
        >
          <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
        </svg>
        <br />
        <h4 className="mt-3 mb-5 text-center headers blue-text">
          TECHNOLOGIES I USE
        </h4>
      </Row>

      <Row className="justify-content-center pt-3">
        {initialPosts.map((skill, idx) => {
          return (
            <div key={idx} className="items-center">
              <div className="skillbar clearfix">
                <div className="skillbar-title ps-1">
                  <span>
                    <a
                      href={skill.link}
                      className="App text-light pe-2"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={skill.image}
                        className="me-2 p-1 white-bg rounded"
                        style={{ width: "25px", height: "25px" }}
                      />
                      {skill.name}
                    </a>
                  </span>
                </div>
                <ProgressBar
                  style={{ height: "30px", backgroundColor: "#FDFEFF" }}
                  animated
                  className="mb-2"
                  variant="secondary"
                  now={skill.now}
                />
                <div className="skill-bar-percent Count">
                  {skill.percentage}
                </div>
              </div>
            </div>
          );
        })}

        {index >= skills.length ? (
          <></>
        ) : (
          <Col className="d-grid mt-5 mb-5">
            <button
              onClick={loadMore}
              type="button"
              className="load-more-button-2"
            >
              More +
            </button>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Skills;
