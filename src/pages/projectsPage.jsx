import React, { useState } from "react";
import Modal from "@/components/Projetos/Modal";
import Card2 from "@/components/Cards/CardBase2";
import Button from "react-bootstrap";
import { news } from "@/styles/datas";
import {
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
  Pagination,
} from "react-bootstrap";

export default function ProjectsPage() {
  const [openModal, setOpenModal] = useState(false);
  const [filterYear, setFilterYear] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const newsItems = news.slice(0, 14);

  const handleButtonClick = () => {
    setOpenModal(true);
  };

  const handleFilterYear = (year) => {
    setFilterYear(year);
    setCurrentPage(1);
  };

  const filteredNewsItems = filterYear
    ? newsItems.filter((newsItem) => newsItem.data.includes(filterYear))
    : newsItems;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNewsItems = filteredNewsItems.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredNewsItems.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className="bg-white">
      <Form className="flex justify-center p-2">
        <InputGroup className="w-1/3 center justify-center">
          <DropdownButton
            variant="outline-secondary"
            title="Filtrar por ano"
            id="input-group-dropdown-1"
          >
            <Dropdown.Item onClick={() => handleFilterYear("")}>
              Todos
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilterYear("2017")}>
              2017
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilterYear("2018")}>
              2018
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilterYear("2019")}>
              2019
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilterYear("2020")}>
              2020
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilterYear("2021")}>
              2021
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilterYear("2022")}>
              2022
            </Dropdown.Item>
          </DropdownButton>
        </InputGroup>
      </Form>
      {/*<div className="gap-5">
        <div className="flex justify-center gap-5 mt-8">
          <Button className="bg-bluesatc1" onClick={handleButtonClick}>
            Adicionar Projeto
          </Button>
          <Button className="bg-red ">Remover Projeto</Button>
        </div>
        <div>
          <Modal
            isOpen={openModal}
            setModalClosed={() => setOpenModal(!openModal)}
          ></Modal>
        </div>
      </div> */}
      <div className="grid grid-cols-3 gap-4 mt-8 p-1 justify-items-center">
        {currentNewsItems.map((newsItem) => (
          <Card2 key={newsItem.id} newsItem={newsItem} />
        ))}
        <Card2 newsItem={news[""]} />
      </div>
      <Pagination className="justify-content-center mt-4 p-3">
        <Pagination.Prev
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {Array.from({ length: totalPages }, (_, index) => (
          <Pagination.Item
            key={index + 1}
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
    </main>
  );
} 
