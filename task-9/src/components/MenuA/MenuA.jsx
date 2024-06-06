import { Container, Row ,Col } from "react-bootstrap";
import './MenuA.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
export default function MenuA() {
    const [search,setSearch]= useState()
  return (
    <div className="main p-5 my-3 d-flex justify-content-center align-items-center w-100">
        <Container className="d-flex justify-content-center align-items-center text-center">
            <Row className="meal-wrapper">
                <h2 className="title">Search Your Food Recipe</h2>
                <p></p>
                <Row className="search-box w-100 text-center d-flex justify-content-center">
                    <Col sm={6}>
                        <Form.Control
                        type="text"
                        placeholder="Search"
                        className="serch-bar mr-sm-2 w-100"
                        onClick={(e)=>setSearch(e.target.value)}
                        />
                    </Col>
                    <Col sm={3}>
                        <Button type="submit" className="btn-color btn-read w-100">Submit</Button>
                    </Col>
                </Row>
                <Row className="contant"></Row>
            </Row>
        </Container>
    </div>
  )
}
