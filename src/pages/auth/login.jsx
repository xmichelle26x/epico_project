import React from "react";
import {Form, Button, Container, Row, Col} from 'react-bootstrap';

const styleButton = {
    width:'100%',
    backgroundColor:'#0d6efd'
}


function Login(){
    return(
        <Container style={{marginTop:'120px'}} >
            
        <Row className="login">
            <Col md={4}>
                
                <h2 className='title'>Iniciar sesión</h2>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Usuario" />
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
                </Form>
            </Col>
        </Row>
    </Container>
    )
}


export default Login;