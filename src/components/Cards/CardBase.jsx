import React, { useState } from 'react';
import {Button, Card, Modal} from "react-bootstrap";


const Card2 = ({ newsItem }) => {
  
  const { titulo, descricao, academico, orientador, data } = newsItem || {}; 
  const [showModal, setShowModal] = useState(false);



  const toggleModal = () => {
    setShowModal(!showModal);
  };

  if (!newsItem) {
    
    return null; 
  }

  return (
    <main>
    <div>
      <Card className="w-[18rem] h-[520px] bg-bluesatc1">
        <Card.Img variant="top" src="images/hometest2.png" />
        <Card.Body>
          <div>
          <Card.Title className="text-gray2 text-truncate" title={titulo}>
            {titulo}
          </Card.Title>
          </div>
          <p className="text-gray2">Academico: {academico}</p>
          <p className="text-gray2 mt-2 gap-2">Orientador: {orientador}</p>
          <div className="text-gray2">
              <Button className="bg-bluesatc3 mt-2 flex" variant="primary" onClick={toggleModal}>
                Leia mais
              </Button>
              <div className="flex mt-3">Ano: {data}</div> 
          </div>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title className="text-black">{titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-black">
          {descricao}
        </Modal.Body>
        <Modal.Footer>
          <Button className="text-black" variant="secondary" onClick={toggleModal}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
      </main>
  );
};

export default Card2;
