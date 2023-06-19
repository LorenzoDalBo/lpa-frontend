import TimelineItem from "@/components/Timeline/timelineItem";
import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const TimelinePage = () => {

  const [timelineElements, setTimelineElements] = useState([]);

  const handleAddElement = () => {
    setTimelineElements((prevElements) => [
      ...prevElements,
      <TimelineItem key={prevElements.length} />,
    ]);
  };

  return (
    <main>
      <Container className="bg-slate-200" fluid>
        <Row>
          <Form className="flex border-t-2 border-solid border-blue-600 justify-center p-3">
            <InputGroup className="w-1/3">
              <DropdownButton
                variant="outline-secondary"
                title="Filtrar por ano"
                id="input-group-dropdown-1"
              >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
              </DropdownButton>
              <Form.Control
                size="lg"
                placeholder="Filtrar projetos . . ."
              ></Form.Control>
            </InputGroup>
          </Form>
          <div className="flex justify-center gap-5 mt-8">
            <div>
              <Button className="bg-bluesatc1" onClick={handleAddElement}>Adicionar Projeto</Button>   
            </div>
            <Button className="bg-red ">Remover Projeto</Button>
          </div>
        </Row>
        <Row>
          <VerticalTimeline>
          <div className="timeline">
            {timelineElements.map((element) => element)}
             </div>
          </VerticalTimeline>
        </Row>
      </Container>
    </main>
  );
};

export default TimelinePage;
