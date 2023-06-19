import React, { useState } from 'react';
import Button from '@/components/Cards/Botão';
import Card from '@/components/Cards/Card';

export default function ProjectsPage () {

  const [showCards, setShowCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMoreCards = async () => {
    setIsLoading(true);
   
    await new Promise(resolve => setTimeout(resolve));
  
    const newCard = { id: Date.now() };
    setShowCards(prevCards => [...prevCards, newCard]);
    setIsLoading(false);
  };

  const handleButtonClick = () => {
    fetchMoreCards();
  }; 


  return (
    <div>
      <div className='flex'>
      <Button onClick={handleButtonClick} />
      </div>
     <div>
      {showCards.map(card => (
        <Card key={card.id} />
      ))}
     
     </div>
      </div>
  )
}   
   