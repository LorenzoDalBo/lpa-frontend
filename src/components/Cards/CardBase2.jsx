import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Card2 () {
  return (
    <Card className="w-[20rem] bg-white shadow-xl shadow-bluesatc4">
      <Card.Img variant="top" src="images/hometest2.png" />
      <Card.Body>
        <Card.Title>Título</Card.Title>
        <Card.Text>
          Projeto feito pela engenharia de software
        </Card.Text>
        <Button className="bg-bluesatc3 mt-2" variant="primary">
            <a href='http://localhost:3000/projectsPage'>Projetos</a>
        </Button>
      </Card.Body>
    </Card>
  );
}
