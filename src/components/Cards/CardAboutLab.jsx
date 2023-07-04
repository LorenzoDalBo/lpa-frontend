import Card from 'react-bootstrap/Card';

export default function CardAboutLab () {
    return (
      <Card className="w-[20rem] bg-white shadow-xl shadow-bluesatc4">
        <Card.Img variant="top" src="" alt='imagem do lab com a plotagem'/>
        <Card.Body>
          <Card.Title className='flex justify-center'>LABTEC</Card.Title>
          <Card.Text className='text-center'>
            Laboratório
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }