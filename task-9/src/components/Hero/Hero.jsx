import { Container, Row ,Col} from 'react-bootstrap'
import './Hero.css'
import heroImg from './../../assets/images/hero.png'
export default function Hero() {
  return (
    <section className='hero '>
        <Container fluid>
          <Row className='heroContant p-lg-5 p-md-5'>
              <Col lg={6} md={12} sm={12} className=' mt-md-4 mt-4  p-lg-4'>
                    <h1>Enjoy Our Delicious Meal</h1>
                    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <button className='btn btn-color'>Order</button>
              </Col>
              <Col lg={6} md={12} sm={12} className='heroImg mt-4  text-center'>
                    <img className='img-fluid mt-md-0' src={heroImg} alt="" />  
              </Col>
          </Row>

        </Container>
    </section>
  )
}
