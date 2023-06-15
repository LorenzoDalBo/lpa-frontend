import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Card2 () {
  return (
    <Card className="w-[18rem] bg-bluesatc1">
      <Card.Img variant="top" src="images/hometest2.png" />
      <Card.Body>
        <Card.Title>Teste</Card.Title>
        <Card.Text>
          Apenas informação teste
        </Card.Text>
        <Button className="bg-bluesatc3" variant="primary">
            <a href='http://localhost:3000/Projectspage2'>Go somewhere</a>
        </Button>
      </Card.Body>
    </Card>
  );
}
