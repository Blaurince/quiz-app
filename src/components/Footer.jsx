import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const githublink = "http://goithub.com/blaurince/quiz-app";
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <p>
              <small>&copy; 2023</small>
              <br />
              <a href={githublink} target="_blank" rel="noreferrer">
                Code in Github
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
