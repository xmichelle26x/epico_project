import React from "react";
import {Container, Row, Col, Carousel} from 'react-bootstrap';


const carouselImages = [
    'assets/carousel/carousel1.jpg',
    'assets/carousel/carousel2.jpg',
    'assets/carousel/carousel3.jpg',
    'assets/carousel/carousel4.jpg',
]

function MainPage(){
    return(
        <Container style={{marginTop:'80px'}} >
            
        <Row className="login">
            <Col md={8} >               
                
                <Carousel variant="dark" className='carrousel'>
                    { carouselImages.map( (e) => (
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={e}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>   
            </Col>
        </Row>
    </Container>
    )
}


export default MainPage;