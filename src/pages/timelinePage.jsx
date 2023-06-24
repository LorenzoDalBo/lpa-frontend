import Modal from "@/components/Timeline/Modal";
import React, {useState} from "react";
import TimelineItem from "@/components/Timeline/timelineItem";
import {
  Button,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function TimelinePage () {
  
  const [openModal, setOpenModal] = useState(false)
  const [timelineElements, setTimelineElements] = useState([]);
  

  function handleAddElement () {
    setOpenModal (true)
    setTimelineElements((prevElements) => [
      ...prevElements,
      <TimelineItem key={prevElements.length} />,
    ]);
  };
  return (
    <main className="bg-zinco3 h-fit w-screen">
      <Container className="bg-slate-200" fluid>
        <Row>
          <Form className="flex border-t-2 border-solid border-bluesatc3 justify-center p-3">
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
            <Button className="bg-bluesatc1" onClick={handleAddElement}>Adicionar Projeto</Button>
            <Button className="bg-red ">Remover Projeto</Button> 
          </div>
          <div>
          <Modal isOpen={openModal}/>
          </div>  
        </Row>
        <Row>
          <VerticalTimeline className="mt-3">
          <div className="timeline">
            {timelineElements.map((element) => element)}
          </div>
          </VerticalTimeline>
        </Row>
      </Container>
    </main>
  );
};