import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import ModalRegistro from "../components/modalRegistro";

const styleContainer = {
    marginTop:'30px',
    marginBottom:'60px'
}
function ApplicationForm() {

    const [show, setShow] = useState(false);

    const send = ( e ) =>{
        e.preventDefault();
        setShow(true)
    }
    useEffect(() => {
        window.scrollTo(0,0);

    }, [])
    return (
        <Container style={styleContainer}>
            <Row className="login">
                <Col md={7}>

                <h2 className='title primaryColor'>Formulario Primera Fase</h2>
                <p style={{marginBottom:'20px', textAlign:'left', marginLeft:'50px'}}>Completa por favor el siguiente formulario para continuar a la siguiente fase</p>
                    
                        <Form className="colForm" style={{textAlign:'left'}} onSubmit={ (e) => send( e ) }>
                            <Form.Group className="mb-3" >
                                <Form.Label htmlFor="name"><span>Nombres *</span></Form.Label>
                                <Form.Control required type="text" id="name" placeholder="Juan Andrés"/>
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label htmlFor="lastName"><span>Apellidos *</span></Form.Label>
                                <Form.Control required type="text" id="lastName" placeholder="Salazar Aguilar"/>
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label htmlFor="identification"><span>Cedula *</span></Form.Label>
                                <Form.Control required type="text" id="identification" placeholder="1215193242"/>
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label htmlFor="birthday"><span>Fecha de Nacimiento *</span></Form.Label>
                                <Form.Control required type="date" id="birthday"/>
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label htmlFor="phone"><span>Celular *</span></Form.Label>
                                <Form.Control required type="text" id="phone" placeholder="0985219255"/>
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label><span>Género *</span></Form.Label>
                                <div key="inline-gender" className="mb-3">
                                    <Form.Check inline type="radio" name="gender" id="male" label="Hombre" />
                                    <Form.Check inline type="radio" name="gender" id="female" label="Mujer" />
                                    <Form.Check inline type="radio" name="gender" id="other" label="Prefiero no decirlo" />
                                </div>
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label htmlFor="city"><span>Ciudad de residencia *</span></Form.Label>
                                <div key="inline-city" className="mb-3">
                                    <Form.Check inline type="radio" name="city" id="guayaquil" label="Guayaquil" />
                                    <Form.Check inline type="radio" name="city" id="other_city" label="Otro" />
                                </div>
                                <Form.Control type="text" id="phone" placeholder="Indique la ciudad"/>

                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label htmlFor="address"><span>Dirección domiciliaria *</span></Form.Label>
                                <Form.Control required type="text" id="address" placeholder="Tu respuesta"/>
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label htmlFor="city"><span>Estado Civil *</span></Form.Label>
                                <div key="inline-marital-single" className="mb-3">
                                    <Form.Check inline type="radio" name="marital_status" id="single" label="Soltero" />
                                </div>
                                <div key="inline-marital-married" className="mb-3">
                                    <Form.Check inline type="radio" name="marital_status" id="married" label="Casado" />
                                </div>
                                <div key="inline-marital-divorced" className="mb-3">
                                    <Form.Check inline type="radio" name="marital_status" id="divorced" label="Divorciado" />
                                </div>
                                <div key="inline-marital-free" className="mb-3">
                                    <Form.Check inline type="radio" name="marital_status" id="free_union" label="Union Libre" />
                                </div>
                            </Form.Group>
                            <div className="col text-center">
                                <Button style={{width:'50%', marginTop:'50px'}} type="submit">Enviar</Button>
                            </div>
                        </Form>
                </Col>
            </Row>
            <ModalRegistro 
                show={show}
                onHide={() => setShow(false)}
                setShow={setShow}/>                    
    </Container >
    )

}

export default ApplicationForm;