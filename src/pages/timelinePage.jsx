import Modal from "@/components/Projetos/Modal";
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
  
  {/*const [openModal, setOpenModal] = useState(false) COMENTÁRIO JSX */}
  const [timelineElements, setTimelineElements] = useState([]);
  
  function handleAddElement () {
   {/*  setOpenModal (true)COMENTÁRIO JSX */}
    setTimelineElements((prevElements) => [
      ...prevElements,
      <TimelineItem key={prevElements.length} />,
    ]);
  };
  return (
    <main className="bg-white h-fit w-screen">
      <Container fluid>
        <Row>
          <Form className="flex border-t-2 border-solid justify-center mt-4 p-3">
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
          {/* <div className="flex justify-center gap-5 mt-8">
            <Button className="bg-bluesatc1" onClick={handleAddElement}>Adicionar Projeto</Button>
            <Button className="bg-red ">Remover Projeto</Button> 
          </div>
          <div>
          <Modal isOpen={openModal} setModalClosed={() => setOpenModal(!openModal)}/> 
          </div>COMENTÁRIO JSX */}  
        </Row>
        <Row>
          <VerticalTimeline className="mt-3" lineColor="#000000">
          <div className="timeline">
            {timelineElements.map((element) => element)}
            <TimelineItem/>
            <TimelineItem/>
            <TimelineItem/>
          </div>
          </VerticalTimeline>
          
        </Row>
      </Container>
    </main>
  );
};