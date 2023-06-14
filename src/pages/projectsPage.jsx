import FormProjects from '@/components/Form.jsx/formProjects'
import React from 'react'
import { Card, CardGroup, Container, Row } from 'react-bootstrap'
import CardBase from "@/components/Cards/CardBase";

const ProjectsPage = () => {

  
  return (
     <Container>
      <main className='h-fit bg-gray-500'>
        <Row>
          <div className='flex-col justify-center items-center gap-6 mt-4'>
              <div className='flex gap-3'>
                <FormProjects />
                <FormProjects />
                <FormProjects />
                <FormProjects />  
                </div>   
                <div className='flex gap-3'>
                <CardBase/>
                <CardBase/>
                <CardBase/>   
                </div>     
            </div>
           </Row>
           </main>
      </Container>
  )
}

export default ProjectsPage