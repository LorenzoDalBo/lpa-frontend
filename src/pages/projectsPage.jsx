import React, { useState } from "react";
import Card2 from "@/components/Cards/CardBase2";
import Modal from "@/components/Projetos/Modal";
import { Button } from "react-bootstrap";

export default function ProjectsPage() {
  const [openModal, setOpenModal] = useState(false);
  const [showCards, setShowCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMoreCards = async () => {
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve));

    const newCard = { id: Date.now() };
    setShowCards((prevCards) => [...prevCards, newCard]);
    setIsLoading(false);
  };

  function handleButtonClick () {
    fetchMoreCards();
    setOpenModal(true);
  };

  return (
    <main className="bg-gray1 p-3">
      <div className="gap-5">
        <div className="flex justify-center gap-5 mt-8">
          <Button className="bg-bluesatc1" onClick={handleButtonClick}>Adicionar Projeto</Button>  
          <Button className="bg-red ">Remover Projeto</Button> 
        </div>
        <div>
          <Modal isOpen={openModal} setModalClosed={() => setOpenModal(!openModal)}></Modal>
        </div>
        <div className="grid grid-cols-3 gap-4 p-4 justify-items-center">
          {showCards.map((Card) => (
            <Card2 key={Card.id} />
          ))}
        </div>
      </div>
    </main>
  );
}
