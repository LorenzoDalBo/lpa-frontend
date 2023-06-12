import React from "react";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";

const AboutPage = () => {
  return (
    <main className="bg-slate-200 py-4">
      <Container className="bg-slate-200">
        <Row>
          <Col className="flex justify-center">
            <CardGroup className="w-1/2">
              <Card>
                <Card.Img src="about-img2.jpeg"/>
                <Card.Body>
                  <Card.Title>Titulo card 1</Card.Title>
                  <Card.Text>texto card 1</Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
          <Col className="text-blue-500 flex flex-col justify-center">
            <h2 className="text-green-500 text-3xl">Foda 2</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore adipisci, eligendi reiciendis quaerat ducimus beatae officia assumenda ipsa at velit nihil totam dicta sit! Aliquam eum suscipit minus temporibus eos!</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-blue-500 flex flex-col justify-center">
            <h2 className=" text-green-500 text-3xl">Foda</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur nemo vero dolorum animi dicta officia quod quibusdam pariatur tempora? Beatae itaque placeat labore pariatur culpa optio error doloremque voluptate aliquid?</p>
          </Col>
          <Col className="flex justify-center">
            <CardGroup className="w-1/2">
              <Card>
                <Card.Img src="/about-logo.jpeg"/>
                <Card.Body>
                  <Card.Title>Titulo card 2</Card.Title>
                  <Card.Text>texto card 2</Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default AboutPage;
