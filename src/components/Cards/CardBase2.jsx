import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Card2 () {
  return (
    <Card className="w-[18rem] bg-bluesatc1 ">
      <Card.Img variant="top" src="images/hometest2.png" />
      <Card.Body>
        <Card.Title>Título</Card.Title>
        <Card.Text>
          Projeto feito pela engenharia de software
        </Card.Text>
        <Button className="bg-bluesatc3 mt-2" variant="primary">
            <a href='http://localhost:3000/Projectspage2'>Projetos</a>
        </Button>
      </Card.Body>
    </Card>
  );
}