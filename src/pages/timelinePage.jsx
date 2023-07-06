import Modal from "@/components/Projetos/Modal";
import TimelineItem from "@/components/Timeline/timelineItem";
import React, { useState, useEffect } from "react";
import { Container, Dropdown, DropdownButton, Button, Form, InputGroup, Row, Pagination } from "react-bootstrap";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { times } from "@/styles/times";

const TimelinePage = () => {
  const [timelineElements, setTimelineElements] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 10; 

  useEffect(() => {
    setTimelineElements(times);
  }, []);

  const handleFilterMonth = (month) => {
    setSelectedMonth(month);
    setCurrentPage(1);
  };

  const handleFilterYear = (year) => {
    setSelectedYear(year);
    setCurrentPage(1);
  };

  const filteredTimelineElements = timelineElements.filter((element) => {
    if (selectedMonth === "" && selectedYear === "") {
      return true;
    } else if (selectedMonth !== "" && selectedYear === "") {
      return element.mes === selectedMonth;
    } else if (selectedMonth === "" && selectedYear !== "") {
      return element.ano === selectedYear;
    } else {
      return element.mes === selectedMonth && element.ano === selectedYear;
    }
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTimelineElements.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredTimelineElements.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
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



export default TimelinePage;
