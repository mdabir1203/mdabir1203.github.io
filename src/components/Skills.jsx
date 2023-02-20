import { useAppContext } from "../appContext";
import { Element } from "react-scroll";
// Data
import { HardSkill, SoftSkill, resume, MyBlog } from "../data";
// Components
import { Button, Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";

export default function Skills() {
  const { theme } = useAppContext();

  return (
    <Element name={"HardSkill"} id="Hskills">
      <section className="section">
        <Container className="text-center">
          <Title>
            <h2>Tech Stacks</h2>
            <div className="underline"></div>
          </Title>
          <Row className="mt-3 align-items-center">
            {HardSkill.map((skills) => {
              return (
                <Col xs={4} key={skills.id} className="my-md-5">
                  <figure>
                    {skills.skill}
                    <figcaption>{skills.name}</figcaption>
                  </figure>
                </Col>
              );
            })}
          </Row>
    <Element name={"SoftSkills"} id="Softskills">
      <section className="section">
        <Container className="text-center">
          <Title>
            <h2>Soft Skills</h2>
            <div className="underline"></div>
          </Title>
          <Row className="mt-3 align-items-center">
            {SoftSkill.map((Softskills) => {
              return (
                <Col xs={4} key={Softskills.id} className="my-md-5">
                  <figure>
                    {Softskills.skill}
                    <figcaption>{Softskills.name}</figcaption>
                  </figure>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </Element>
    <Element>
      <Container>
        <section>
        {resume && (
            <a href={resume}>
              <Button
                size="lg"
                variant={theme === "light" ? "outline-dark" : "outline-light"}
                className="mt-5"
              >
              CV/Lebenslauf
              </Button>
            </a>
          )}
          {MyBlog && (
            <a href={MyBlog}>
              <Button
                size="lg"
                variant={theme === "light" ? "outline-dark" : "outline-light"}
                className="mt-5"
              >
              MyLearningBlog
              </Button>
            </a>
          )}
        </section>
      </Container>
    </Element>
        </Container>
      </section>
    </Element>
  );
}
