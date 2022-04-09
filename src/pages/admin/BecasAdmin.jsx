import { useEffect, useState } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import Beca from "./Beca";

function BecasAdmin( { becas, setBecas } ){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect( ()=>{

    }, [ ] );
    return (
        <Container>
            <Row>
                <Col className="d-grid gap-2">
                    <Button variant="outline-dark" size="sm" style={{ margin:' 20px 0 0 0 ' }} onClick={ () => handleShow( true ) }>Agregar Nuevo</Button>
                </Col>
            </Row>
            <Row>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    becas.map( ( e, i ) =>(
                        <Col>
                            <Card >
                                <Card.Img variant="top" style={{ paddingTop : "20px" }} src={ e.image } />
                                <Card.Body>
                                    <Card.Title><h2>{ e.title }</h2></Card.Title>
                                    <Card.Text>{ e.description }</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                } 
                </Row>     
            </Row>
            <Beca show={ show } handleClose={ handleClose } becas={ becas } setBecas={ setBecas }/>
        </Container>
    )
}

export default BecasAdmin;