import React, { useEffect, useState } from "react";
import {Form, Button, Container, Row, Col, Spinner} from 'react-bootstrap';
import {LinkContainer } from 'react-router-bootstrap'
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'

const styleButton = {
    width:'100%',
    backgroundColor:'#0d6efd',
    marginTop: '10px'
}


function Login({ setLogged }){

    const { handleSubmit, formState } = useForm()
    const { isSubmitting } = formState
    const navigate = useNavigate();

    function submitForm() {
        return new Promise(() => {
          setTimeout(() => {
            setLogged( true ); 
            navigate("/");
          }, 1000);
        })
    }
    return(
        <Container style={{marginBottom:'60px',marginTop:'30px'}}>
            
        <Row className="login">
            <Col md={4}>
                
                <h2 className='title'>Iniciar sesión</h2>
                <Form className="colForm" onSubmit={handleSubmit(submitForm)}>
                    <Form.Group className="mb-3">
                        <Form.Control required type="text" placeholder="N. Identificación" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control required type="password" placeholder="Contraseña" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Check type="checkbox" label="Recordarme" style={{textAlign:'left'}}/>
                    </Form.Group>
                    {
                        isSubmitting  ? 
                        <Spinner animation="border" variant="primary" />
                        :
                        <>
                            <Button variant="primary" size="lg" type="submit" style={styleButton}>
                                Ingresar
                            </Button>
                            <LinkContainer style={styleButton} to="/register"> 
                                <Button variant="primary" size="lg" type="button" >
                                    Registrarse
                                </Button>
                            </LinkContainer>
                        </>
                    }
                    
                </Form>
            </Col>
        </Row>
    </Container>
    )
}


export default Login;