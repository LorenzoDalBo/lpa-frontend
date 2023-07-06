
import { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
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
      <Card className="w-[18rem] h-[480px] shadow-xl p-3 mb-5 shadow-bluesatc1 rounded">
        <Card.Img variant="top" src="images/hometest2.png" />
        <Card.Body>
          <div>
          <Card.Title className="text-black text-truncate" title={titulo}>
            {titulo}
          </Card.Title>
          </div>
          <p className="text-black text-truncate">Academico: {academico}</p>
          <p className="text-black mt-2 gap-2 text-truncate">Orientador: {orientador}</p>
          <div className="text-black">
          <div className="flex mt-2">Ano: {data}</div>
              <div className='flex justify-center'>
              <Button className="bg-bluesatc3 mt-2 flex" variant="primary" onClick={toggleModal}>
                Leia mais
              </Button>
              </div> 
          </div>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title className="text-black">{titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-black">
          <div>
          <div> {descricao}</div>
          <div className='font-bold'>Academico: {academico}</div>
          <div className='font-bold'>Orientador: {orientador}</div>
          </div> 
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
}

export default Card2;