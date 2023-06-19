import React, { useState } from 'react';
import Button from '@/components/Cards/Botão';
import Card1 from '@/components/Cards/Card1';

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
    <div className='gap-5'>
      <div className='flex justify-center'>
      <Button onClick={handleButtonClick} />
      </div>
     <div className='grid grid-cols-3 gap-4'>
      {showCards.map(Card => (
        <Card1 key={Card.id} />
      ))}
     
     </div>
      </div>
  )
}   