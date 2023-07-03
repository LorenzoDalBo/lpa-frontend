
import Card from 'react-bootstrap/Card';

export default function CardAbout () {
    return (
      <Card className="w-[20rem] bg-white shadow-xl shadow-bluesatc4">
        <Card.Img variant="top" src="images/Vagner.jpg"/>
        <Card.Body>
          <Card.Title className='flex justify-center'>Coordenador</Card.Title>
          <Card.Text className='text-center'>
            Vagner Rodrigues
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }