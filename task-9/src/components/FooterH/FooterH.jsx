import { Col, Container, Row } from "react-bootstrap";
import './FooterH.css'
export default function FooterH() {
  return (
    <div className="footer pt-5">
        <Container fluid>
          <Row className="d-flex justify-content-center align-item-center p-3 text-center">
            <Col lg={3} className="my-3">
              <h4>Newsletter</h4>
              <h5 className='color'>Monday - Saturday</h5>
              <h5 className='color'>Monday - Saturday</h5>
              <h5 className='color'>Monday - Saturday</h5>
            </Col>
            <Col lg={3} className="my-3">
              <h4 >Newsletter</h4>
              <h5 className='color'>Monday - Saturday</h5>
              <h5 className='color'>Monday - Saturday</h5>
              <h5 className='color'>Monday - Saturday</h5>
            </Col>
            <Col lg={3} className="my-3">
              <h4 >Newsletter</h4>
              <h5 className='color'>Monday - Saturday</h5>
              <h5 className='color'>Monday - Saturday</h5>
              <h5 className='color'>Monday - Saturday</h5>
            </Col>
          </Row>
        </Container>
    </div>
  )
}
