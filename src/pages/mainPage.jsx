import React from "react";
import {Container, Row, Col, Carousel} from 'react-bootstrap';

const carouselImages = [
    'assets/carousel/carousel1.jpg',
    'assets/carousel/carousel2.jpg', 
    'assets/carousel/carousel4.jpg',
]

const styleContainer = {
    marginTop:'40px',
    marginBottom:'80px',
    width: 'auto',
}

function MainPage(){
    return(
        <Container style={styleContainer} >
        <Row className="login">
            <h1 class="text-justify primaryColor" style={{marginBottom:'20px'}}>Sistema de Gestión de Becas Épico</h1>
            <Col md={10} style={{ display: 'block', width:'auto',height:'auto',margin:'0',padding:'0'}}>               
                <Carousel variant="dark" className='carrousel' >
                    { carouselImages.map( (e) => (
                        <Carousel.Item interval={3000}>
                            <img className="d-block w-100" src={e}/>
                        </Carousel.Item>
                    ))}
                </Carousel>  
                <div style={{ display: 'block', width:'auto',height:'auto',marginTop:'40px',padding:'0'}}>

                <h3 style={{textAlign: 'justify'}}>Desde ÉPICO seguimos desarrollando más programas de becas e iniciativas para potenciar el talento
                    digital y brindar nuevas y mejores oportunidades a los guayaquileños. 
                Queremos seguir contribuyendo a construir un Guayaquil digital.</h3> 
                </div>
            </Col>     
        </Row>
    </Container> 
    )
}

export default MainPage;