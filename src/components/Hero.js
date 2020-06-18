import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Hero(props){
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-15">
            <Container fluid={true}>
                <Row className="justify-content-center py=5">
                    <Col md={8} sm={12}>
                    {props.title && <h1 className="display-4 font-weight-bolder">{props.title}</h1>}
                    {props.subtitle && <h1 className="display-8 font-weight-light">{props.subtitle}</h1>}
                    {props.text && <h1 className="lead font-weight-light">{props.text}</h1>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}


export default Hero;