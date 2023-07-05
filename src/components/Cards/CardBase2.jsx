import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Card2 () {
  return (
    <Card className="w-[20rem] bg-white shadow-xl shadow-bluesatc4 mt-10">
      <Card.Img variant="top" src="images/hometest2.png" />
      <Card.Body>
        <Card.Title className='flex justify-center'>Título</Card.Title>
        <Card.Text>
          Projeto feito pela engenharia de software
        </Card.Text>
        <Button className="bg-bluesatc3 mt-2 ml-24" variant="primary">
        </Button>
      </Card.Body>
    </Card>
  );
}
