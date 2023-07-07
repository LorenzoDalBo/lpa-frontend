import TimelineItem from "@/components/Timeline/timelineItem";
import React, { useState, useEffect } from "react";
import {
  Container,
  Dropdown,
  DropdownButton,
  Button,
  Form,
  InputGroup,
  Row,
  Pagination,
} from "react-bootstrap";
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

  const selectedPanel = ({ selectedPanel }) => {};

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
  const currentItems = filteredTimelineElements.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredTimelineElements.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className="bg-gray0 h-fit w-screen">
      <Container fluid>
        <Row>
          {/* <div className="flex justify-center gap-5 mt-8">
            <Button className="bg-bluesatc1" onClick={handleAddElement}>Adicionar Projeto</Button>
            <Button className="bg-red ">Remover Projeto</Button> 
          </div>
          <div>
          <Modal isOpen={openModal} setModalClosed={() => setOpenModal(!openModal)}/> 
          </div>COMENTÁRIO JSX */}
        </Row>
        <Form className="justify-center mt-2 flex">
          <InputGroup className="w-1/3 center justify-center">
            <DropdownButton
              variant="outline-secondary"
              title="Filtrar:"
              id="input-group-dropdown-1"
            >
              <Dropdown.Item onClick={() => handleFilterMonth("")}>
                Todos
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilterMonth("Janeiro")}>
                Janeiro
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilterMonth("Fevereiro")}>
                Fevereiro
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilterMonth("Março")}>
                Março
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilterMonth("Abril")}>
                Abril
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilterMonth("Maio")}>
                Maio
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilterMonth("Junho")}>
                Junho
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilterMonth("Julho")}>
                Julho
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilterMonth("Agosto")}>
                Agosto
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilterMonth("Setembro")}>
                Setembro
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilterMonth("Outubro")}>
                Outubro
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilterMonth("Novembro")}>
                Novembro
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilterMonth("Dezembro")}>
                Dezembro
              </Dropdown.Item>
            </DropdownButton>
          </InputGroup>

          <Button className="btn disabled text-black font-bold px-48 btn-lg btn-primary">
            {selectedYear}
          </Button>

          <InputGroup className="w-1/3 center justify-center">
            <DropdownButton
              variant="outline-secondary"
              title="Filtrar por Ano:"
              id="input-group-dropdown-2"
            >
              <Dropdown.Item onClick={() => handleFilterYear("")}>
                Todos
              </Dropdown.Item>
              {Array.from(
                new Set(timelineElements.map((element) => element.ano))
              ).map((year) => (
                <Dropdown.Item
                  key={year}
                  onClick={() => handleFilterYear(year)}
                >
                  {year}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </InputGroup>
        </Form>

        <Row>
          <VerticalTimeline className="" lineColor="#000000">
            <div className="timeline">
              {currentItems.map((element, index) => (
                <TimelineItem key={index} timesItem={element} />
              ))}
            </div>
          </VerticalTimeline>
        </Row>

        <Row className="flex justify-content-center p-3">
          <Pagination className="flex  justify-content-center mt-4">
            <Pagination.Prev
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            />
            {Array.from({ length: totalPages }).map((_, index) => (
              <Pagination.Item
                key={index}
                active={index + 1 === currentPage}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            />
          </Pagination>
        </Row>
      </Container>
    </main>
  );
};

export default TimelinePage;
