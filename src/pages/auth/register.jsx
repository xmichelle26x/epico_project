import React, { useEffect } from "react";
import {Form, Button, Container, Row, Col} from 'react-bootstrap';



function Register(){
    useEffect( ()=>{
        window.scrollTo(0,0);
    }, [])
    return(
            <Container style={{marginBottom:'60px',marginTop:'30px'}}>            <Row className="login">
                <Col  md={4} >
                <h2 className='title'>Registro</h2>
                <Form className="colForm">
                    <Form.Group className="mb-3">
                        <Form.Control required type="text" placeholder="Nombres" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control required type="text" placeholder="Apellidos" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control required type="text" placeholder="N. Identificación" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control required type="text" placeholder="Correo" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control required type="password" placeholder="Contraseña" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control required type="password" placeholder="Confirme Contraseña" />
                    </Form.Group>
                    <Button variant="primary" size="lg" type="submit" className="styleButton">
                        Registrar
                    </Button>
                </Form>
                </Col>
            </Row>
        </Container> 
    )
}

export default Register;