import { Col, Container, Row } from 'react-bootstrap'
import './ContactH.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'


export default function ContactH() {
  return (
    <section>
        <Container className='p-5'>
            <Row className='text-center'>
                <h5 className='mb-1'>Contact Us</h5>
                <h1 className='mb-5'>Contact For Any Query</h1>
            </Row>
            <Row className='text-center'>
                <Col md={4}><h5 className='color'>Technical</h5>
                <a href=""><FontAwesomeIcon icon={faEnvelope} />tech@example.com</a>
                </Col>
                <Col md={4}><h5 className='color'>Technical</h5>
                <a href=""><FontAwesomeIcon icon={faEnvelope} />General</a>
                </Col>
                <Col md={4}><h5 className='color'>Technical</h5>
                <a href=""><FontAwesomeIcon icon={faEnvelope} />Booking</a>
                </Col>
            </Row>
            <Row className='text-center'>
                <Col md={6} >
                </Col>
                <Col md={6} ></Col>
            </Row>
        </Container>
    </section>
  )
}
