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
    marginBottom:'60px',
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

const mapStateToProps = ( state ) => {
    return {
        user : state.userReducer.user,
        logged : state.loggedReducer.logged
    }
} 
const Applicant = ( { user, SetUser } ) => {

    const [show, setShow] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [ formUser, setFormUser ] = useState({
        name : "",
        lastName : "",
        identification : "",
        email : "",
        birthday : "",
        phone : "",
        gender : "",
        city : "",
        otherCity : "",
        marital_status : "",
        address : "",
        becas : []
    });
    // const { form, errors, loading, response, handleChange, handleSubmit } = useForm( initialForm, validationsForm )

    const { 
        form,
        errors, 
        response,
        // loading, 
        handleChange, 
        handleErrors,
        handleSubmit 
    } = useForm( initialForm, validationsForm );
    const send = ( e ) => {
        e.preventDefault();
        setLoading( true );
        return new Promise((resolve) => {
            setTimeout(() => {
                SetUser( form );
                setShow( true );
                setLoading( true );

            }, 1500);
            
        });
    }
    const changeForm = ( e ) =>{
        if( e.target.name === "privacyPolicy"){
            setFormUser({
                ...formUser,
                [ e.target.name ] : e.target.checked
            })
        }else{
            setFormUser({
                ...formUser,
                [ e.target.name ] : e.target.value
            })
        }
    }

    useEffect(() => {
        window.scrollTo(0,0);
        console.log( user )
        setFormUser( user );
    }, [])
    return (
        <Container style={styleContainer}>
            <Row className="login">
                <Col md={7}>
                <h2 className='title primaryColor'>Formulario Primera Fase</h2>
                <p style={{marginBottom:'20px', textAlign:'left', marginLeft:'50px'}}>Completa por favor el siguiente formulario para continuar a la siguiente fase</p>
                    
                    <Form className="colForm" style={{textAlign:'left'}} onSubmit={ (e) => send( e ) }>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" >
                                    <Form.Label htmlFor="name"><span>Nombres *</span></Form.Label>
                                    <Form.Control value={ formUser.name } onChange={ changeForm } required type="text" name="name" id="name" placeholder="Juan Andrés"/>
                                    { errors.name && <p className="errors-form">{ errors.name }</p>}
                                </Form.Group>
                            </Col>
                            <Col>                        
                                <Form.Group className="mb-3" >
                                    <Form.Label htmlFor="lastName"><span>Apellidos *</span></Form.Label>
                                    <Form.Control value={ formUser.lastName } onChange={ changeForm }  required type="text" name="lastName" id="lastName" placeholder="Salazar Aguilar"/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" >
                                    <Form.Label htmlFor="identification"><span>Cedula *</span></Form.Label>
                                    <Form.Control value={ formUser.identification } onChange={ changeForm }  required type="text" name="identification" id="identification" placeholder="1215193242"/>
                                    { errors.identification && <p className="errors-form">{ errors.identification }</p>}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" >
                                    <Form.Label htmlFor="email"><span>Email *</span></Form.Label>
                                    <Form.Control value={ formUser.email } onChange={ changeForm } required type="email" name="email" id="email" placeholder="correo@dominio.com"/>
                                    { errors.email && <p className="errors-form">{ errors.emailudem }</p>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" >
                                    <Form.Label htmlFor="birthday"><span>Fecha de Nacimiento *</span></Form.Label>
                                    <Form.Control value={ formUser.birthday } onChange={ changeForm } required type="date" name="birthday" id="birthday"/>
                                </Form.Group>
                            </Col>
                            <Col >
                                <Form.Group className="mb-3" >
                                    <Form.Label htmlFor="phone"><span>Celular *</span></Form.Label>
                                    <Form.Control value={ formUser.phone } onChange={ changeForm } required type="text" name="phone" id="phone" placeholder="0985219255"/>
                                </Form.Group>
                            </Col>
                            
                        </Row>
                        <Form.Group className="mb-3" >
                            <Form.Label><span>Género *</span></Form.Label>
                            <div key="inline-gender" onChange={ handleChange } className="mb-3">
                                <Form.Check inline checked={ formUser.gender === "male" } onChange={ changeForm } value="male" type="radio" name="gender" id="male" label="Hombre" />
                                <Form.Check inline checked={ formUser.gender === "female" } onChange={ changeForm } value="female" type="radio" name="gender" id="female" label="Mujer" />
                                <Form.Check inline checked={ formUser.gender === "other" } onChange={ changeForm } value="other" type="radio" name="gender" id="other" label="Prefiero no decirlo" />
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3" onChange={ handleChange }>
                            <Form.Label htmlFor="city"><span>Ciudad de residencia *</span></Form.Label>
                            <div key="inline-city" className="mb-3">
                                <Row>
                                    <Col xs={2}>
                                        <Form.Check checked={ formUser.city === "guayaquil" } onChange={ changeForm } inline value="guayaquil" type="radio" name="city" id="guayaquil" label="Guayaquil" />
                                    </Col>
                                    <Col xs={2}>
                                        <Form.Check checked={ formUser.city === "other" } onChange={ changeForm } inline value="other" type="radio" name="city" id="other_city" label="Otro" />
                                    </Col>
                                    <Col xs={8}>
                                        <Form.Control hidden={ formUser.city !== "other"} value={ formUser.otherCity} onChange={ changeForm } type="text" name="otherCity" id="otherCity" placeholder="Indique la ciudad"/>
                                    </Col>
                                </Row>
                            </div>

                        </Form.Group>
                        <Form.Group className="mb-3" onChange={ handleChange }>
                            <Form.Label htmlFor="address"><span>Dirección domiciliaria *</span></Form.Label>
                            <Form.Control value={ formUser.address } onChange={ changeForm }  required type="text" name="address" id="address" placeholder="Tu respuesta"/>
                        </Form.Group>
                        <Form.Group className="mb-3" onChange={ handleChange }>
                            <Form.Label htmlFor="city"><span>Estado Civil *</span></Form.Label>
                            <div key="inline-marital-single" className="mb-3">
                            <Form.Check checked={ formUser.marital_status === "single" } onChange={ changeForm }  inline type="radio" name="marital_status" id="single" value="single" label="Soltero" />
                                <Form.Check checked={ formUser.marital_status === "married" } onChange={ changeForm } inline type="radio" name="marital_status" id="married" value="married" label="Casado" />
                                <Form.Check checked={ formUser.marital_status === "divorced" } onChange={ changeForm } inline type="radio" name="marital_status" id="divorced" value="divorced" label="Divorciado" />
                                <Form.Check checked={ formUser.marital_status === "free_union" } onChange={ changeForm } inline type="radio" name="marital_status" id="free_union" value="free_union" label="Union Libre" />
                            </div>
                        </Form.Group>
                        <div className="col text-center">
                            <Button style={{width:'50%', marginTop:'50px'}} disabled={ isLoading } type="submit">
                                { isLoading ? 
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

export default connect( mapStateToProps , {  SetUser} )(Applicant);