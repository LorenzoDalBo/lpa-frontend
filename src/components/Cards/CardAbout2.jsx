
import Card from 'react-bootstrap/Card';

export default function CardAbout2 () {
    return (
      <Card className="w-[20rem] bg-white shadow-xl shadow-bluesatc4">
        <Card.Img variant="top" src="images/Anderson.jpg" />
        <Card.Body>
          <Card.Title className='flex justify-center'>Coordenador</Card.Title>
          <Card.Text className='text-center'>
            Anderson Rodrigo Farias
          </Card.Text> 
        </Card.Body>
      </Card>
    );
  }