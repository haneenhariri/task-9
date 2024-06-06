import './About.css'
import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import about1 from './../../assets/images/about-1.jpg'
import about2 from './../../assets/images/about-2.jpg'
import about3 from './../../assets/images/about-3.jpg'
import about4 from './../../assets/images/about-4.jpg'
import { Button } from 'react-bootstrap';

export default function AboutH() {
  return (
    <div className='py-5 px-2'>
        <Container>
            <Row >
                <Col lg={6}>
                    <Row className='g-3'>
                    <Col className='col-6  text-start'>
                   <img src={about1} className='img-fluid  w-100' alt="" />
                </Col>
                <Col className='col-6  text-start'>
                   <img src={about2} className='img-fluid mt-5 w-75' alt="" />
                </Col>
                <Col className='col-6  text-end'>
                   <img src={about3} className='img-fluid w-75' alt="" />
                </Col>
                <Col className='col-6  text-end'>
                   <img src={about4} className='img-fluid w-100' alt="" />
                </Col>
                    </Row>
                </Col>
                <Col lg={6} className='p-4 mt-5'>
                    <h5 className='titel'>About Us</h5>
                    <h1>Welcome to <FontAwesomeIcon icon={faUtensils} className='text-primary fs-1' /> Restoran</h1>
                    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
                    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <Row className='mb-4'>
                        <Col sm={6}>
                            <div className='ord d-flex align-items-center border-start border-5 px-3'>
                                <h1 className='mb-0'>15</h1>
                                <div className='ps-4'>
                                    <p className='mb-0'>Years of</p>
                                    <h6 className='mb-0'>EXPERIENCE</h6>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className='ord d-flex align-items-center border-start border-5 px-3'>
                                <h1 className='mb-0'>15</h1>
                                <div className='ps-4'>
                                    <p className='mb-0'>Years of</p>
                                    <h6 className='mb-0'>EXPERIENCE</h6>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Button className='btn btn-color btn-read'>Read More</Button>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
