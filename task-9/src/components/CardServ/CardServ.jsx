import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './CardServ.css'
import { faCartShopping, faHeadset, faUserTie, faUtensils } from '@fortawesome/free-solid-svg-icons'
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';


export default function CardServ() {
    const cardSer= [
        {
            img: faUserTie ,
            title:'Master Chefs',
            text:'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
            cName: 'card col-lg-3 col-md-6 '
        },
        {
            img: faUtensils,
            title:'Master Chefs',
            text:'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
            cName: 'card col-lg-3 col-md-6  '
        },
        {
            img: faCartShopping,
            title:'Master Chefs',
            text:'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
            cName: 'card col-lg-3 col-md-6 '
        },
        {
            img: faHeadset,
            title:'Master Chefs',
            text:'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
            cName: 'card col-lg-3 col-md-6 '
        },
    ]
  return (
        <section className='service p-3'>
            <Container >
                <Row  className="cards justify-content-center flex align-items-center p-4 ">
                        {cardSer.map((card,index)=>{
                        return(
                        <Col lg={3} md={6} sm={12} key={index} className='flex justify-content-center m-auto'>
                            <Card className={card.cName} >
                            <FontAwesomeIcon icon={card.img} className='text-primary mb-4' />
                            <Card.Body>
                            <Card.Title>{card.title}</Card.Title>
                            <Card.Text>
                                {card.text}
                            </Card.Text>
                            </Card.Body>
                        </Card></Col>
                        )
                        })}
                </Row>
            </Container>

        </section>
  )
}
