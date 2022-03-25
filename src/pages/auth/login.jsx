import React from "react";
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import {LinkContainer } from 'react-router-bootstrap'


const styleButton = {
    width:'100%',
    backgroundColor:'#0d6efd',
    marginTop: '10px'
}


function Login(){
    return(
        <Container style={{marginBottom:'60px',marginTop:'30px'}}>
            
        <Row className="login">
            <Col md={4}>
                
                <h2 className='title'>Iniciar sesión</h2>
                <Form className="colForm">
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="N. Identificación" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control type="password" placeholder="Contraseña" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Check type="checkbox" label="Recordarme" style={{textAlign:'left'}}/>
                    </Form.Group>

                    <Button variant="primary" size="lg" type="submit" style={styleButton}>
                        Ingresar
                    </Button>
                    <LinkContainer style={styleButton} to="/register"> 
                        <Button variant="primary" size="lg" type="submit" >
                            Registrarse
                        </Button>
                    </LinkContainer>
                </Form>
            </Col>
        </Row>
    </Container>
    )
}


export default Login;