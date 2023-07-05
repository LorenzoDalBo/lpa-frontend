import React from 'react';
import Card2 from '@/components/Cards/CardBase2';
import { news } from '@/styles/datas';

export default function ProjectsPage () {
  const newsItems = news.slice(1, 14);

  return (
    <main className='bg-white'>
       
        <div className='grid grid-cols-3 gap-4 mt-8 p-4 justify-items-center'>
          {newsItems.map((newsItem) => (
            <Card2 key={newsItem.id} newsItem={newsItem} />
          ))}
          <Card2 newsItem={news[0]}/>
      </div>
    </main>
  );
}
