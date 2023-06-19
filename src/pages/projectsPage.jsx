import React, { useState } from 'react';
import Button from '@/components/Cards/Botão';
import Card2 from '@/components/Cards/CardBase2';

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
    <main className='bg-gray2'>
        <div className='gap-5'>
      <div className='flex justify-center'>
        <Button onClick={handleButtonClick} />
        </div>
      <div className='grid grid-cols-3 gap-4 mt-8 p-4 justify-items-center'>
        {showCards.map(Card => (
          <Card2 key={Card.id} />
        ))}
     
      </div>
        </div>
    </main>
  )
}   