import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container, Row, Col, Spinner } from 'react-bootstrap';
import ModalRegistro from "../layouts/modalRegistro";
import { useForm } from "../../hooks/useForm";
import validateIdentification from '../../helpers/validateIdentification'
import validateName from "../../helpers/validateName";
import validateEmail from "../../helpers/validateEmail";
import { SetUser } from "../../store/user/action";
import { connect } from "react-redux";

const styleContainer = {
    marginTop:'30px',
    marginBottom:'60px'
}

const initialForm = {
    name : "",
    lastName : "",
    email : "",
    identification : "",
    birthday : "",
    phone : "",
    gender : "",
    city : "",
    address : "",
    maritalStatus : ""


}
const validationsForm = (form) =>{
    let errors = {};
    let name = validateName( form.name );

    if( name !== "valid"){
        errors.name = name;
    }  

    let identification = validateIdentification( form.identification );
    if( identification !== "valid"){
        errors.identification = identification;
    }     
    
    let email = validateEmail( form.email );
    if( email !== "valid"){
        errors.email = email;
    } 
    return errors;
}

const Applicant = ( { SetUser } ) => {

    const [show, setShow] = useState(false);

    // const { form, errors, loading, response, handleChange, handleSubmit } = useForm( initialForm, validationsForm )

    const { 
        form,
        errors, 
        response,
        loading, 
        handleChange, 
        handleErrors,
        handleSubmit 
    } = useForm( initialForm, validationsForm );
    const send = ( e ) => {
        handleSubmit( e ).then(
            (  )=>{
                if( response ){
                    console.log( e )
                    SetUser( form );
                    setShow( true )
                }
            }
        );
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
                            <Form.Control onChange={ handleChange } required type="text" name="name" id="name" placeholder="Juan Andrés"/>
                            { errors.name && <p className="errors-form">{ errors.name }</p>}
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label htmlFor="lastName"><span>Apellidos *</span></Form.Label>
                            <Form.Control onChange={ handleChange } required type="text" name="lastName" id="lastName" placeholder="Salazar Aguilar"/>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label htmlFor="email"><span>Email *</span></Form.Label>
                            <Form.Control onChange={ handleChange } required type="email" name="email" id="email" placeholder="correo@dominio.com"/>
                            { errors.email && <p className="errors-form">{ errors.emailudem }</p>}
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label htmlFor="identification"><span>Cedula *</span></Form.Label>
                            <Form.Control onChange={ handleChange } required type="text" name="identification" id="identification" placeholder="1215193242"/>
                            { errors.identification && <p className="errors-form">{ errors.identification }</p>}
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label htmlFor="birthday"><span>Fecha de Nacimiento *</span></Form.Label>
                            <Form.Control onChange={ handleChange } required type="date" name="birthday" id="birthday"/>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label htmlFor="phone"><span>Celular *</span></Form.Label>
                            <Form.Control onChange={ handleChange } required type="text" name="phone" id="phone" placeholder="0985219255"/>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label><span>Género *</span></Form.Label>
                            <div key="inline-gender" onChange={ handleChange } className="mb-3">
                                <Form.Check inline value="male" type="radio" name="gender" id="male" label="Hombre" />
                                <Form.Check inline value="female" type="radio" name="gender" id="female" label="Mujer" />
                                <Form.Check inline value="other" type="radio" name="gender" id="other" label="Prefiero no decirlo" />
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3" onChange={ handleChange }>
                            <Form.Label htmlFor="city"><span>Ciudad de residencia *</span></Form.Label>
                            <div key="inline-city" className="mb-3">
                                <Form.Check inline value="guayaquil" type="radio" name="city" id="guayaquil" label="Guayaquil" />
                                <Form.Check inline value="other" type="radio" name="city" id="other_city" label="Otro" />
                            </div>
                            <Form.Control type="text" id="otherCity" placeholder="Indique la ciudad"/>

                        </Form.Group>
                        <Form.Group className="mb-3" onChange={ handleChange }>
                            <Form.Label htmlFor="address"><span>Dirección domiciliaria *</span></Form.Label>
                            <Form.Control required type="text" name="address" id="address" placeholder="Tu respuesta"/>
                        </Form.Group>
                        <Form.Group className="mb-3" onChange={ handleChange }>
                            <Form.Label htmlFor="city"><span>Estado Civil *</span></Form.Label>
                            <div key="inline-marital-single" className="mb-3">
                                <Form.Check inline type="radio" name="marital_status" id="single" value="single" label="Soltero" />
                            </div>
                            <div key="inline-marital-married" className="mb-3">
                                <Form.Check inline type="radio" name="marital_status" id="married" value="married" label="Casado" />
                            </div>
                            <div key="inline-marital-divorced" className="mb-3">
                                <Form.Check inline type="radio" name="marital_status" id="divorced" value="divorced" label="Divorciado" />
                            </div>
                            <div key="inline-marital-free" className="mb-3">
                                <Form.Check inline type="radio" name="marital_status" id="free_union" value="free_union" label="Union Libre" />
                            </div>
                        </Form.Group>
                        <div className="col text-center">
                            <Button style={{width:'50%', marginTop:'50px'}} type="submit">
                                { loading ? 
                                    <Spinner
                                    as="span"
                                    animation="grow"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    /> 
                                    : "Aplicar"
                                } 
                            </Button>
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

export default connect( null , { SetUser} )(Applicant);