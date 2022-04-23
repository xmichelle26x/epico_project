import React, { useEffect, useState } from "react";
import {Form, Button, Container, Row, Col, Alert} from 'react-bootstrap';
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SetUser } from "../../store/user/action";
import { SetLogged } from "../../store/logged/action";


const mapStateProps = ( state ) => {
    return {
        user : state.userReducer.user,
        logged : state.loggedReducer.logged
    }
}

function Register( { SetUser, SetLogged, logged  } ){
    const [ formUser, setFormUser ] = useState({
        name : "",
        lastName : "",
        identification : "",
        email : "",
        password : "",
        repeatPassword : "",
        img : "assets/user.jpg",
        becas : []
    });
    const changeForm = ( e ) =>{
        setFormUser({
            ...formUser,
            [ e.target.name ] : e.target.value
        })
    }
    const [ message, setMessage ] = useState("");
    const navigate = useNavigate();
    const [ showAlert, setShowAlert ] = useState( false );
    const [isLoading, setLoading] = useState(false);
    const authenticate = ( e ) => {
        e.preventDefault();
        setLoading( true );
        return new Promise((resolve) => {
            setTimeout(() => {
                if( formUser.password !== formUser.repeatPassword ){
                    setMessage("Las contraseñas no coinciden");
                    setShowAlert( true );

                }
                else{
                    if( !localStorage.getItem( formUser.identification ) ){
                        localStorage.setItem( formUser.identification, JSON.stringify( formUser ) );
                        SetUser( formUser )
                        SetLogged( true );
                        setLoading( false );
                        navigate("/");
                    }else{
                        setMessage("Ya se encuentra registrado un usuario con esa identificación<br/>Quieres iniciar sesión? <b><a href='/login'>Haz click aqui!</a></b>")
                        setShowAlert( true );
                    }
    
                }
                setLoading( false );
                
                
            }, 1500);
            
        });
        
    }
    useEffect( ()=>{
        window.scrollTo(0,0);
    }, [])
    return(
            <Container style={{marginBottom:'60px',marginTop:'30px'}}>            
            <Row className="login">
                <Col  md={4} >
                <h2 className='title'>Registro</h2>
                <Row>
                    <Alert show={showAlert} variant="warning" onClose={() => setShowAlert(false)}>
                        <Alert.Heading>Ups</Alert.Heading>
                        <p dangerouslySetInnerHTML={{__html: message}}>
                        </p>
                        
                    </Alert>
                </Row>
                <Form className="colForm" onSubmit={ (e) => authenticate(e) }>
                    <Form.Group className="mb-3">
                        <Form.Control onChange={ changeForm } name="name" required type="text" placeholder="Nombres" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control onChange={ changeForm } name="lastName" required type="text" placeholder="Apellidos" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control onChange={ changeForm } name="identification" required type="text" placeholder="N. Identificación" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control onChange={ changeForm } name="email" required type="email" placeholder="Correo" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control onChange={ changeForm } name="password" required type="password" placeholder="Contraseña" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control onChange={ changeForm } name="repeatPassword" required type="password" placeholder="Confirme Contraseña" />
                    </Form.Group>
                    <Button variant="primary" disabled={ isLoading } size="lg" type="submit" className="styleButton">
                        {isLoading ? 'Loading…' : 'Registrar'}
                    </Button>
                </Form>
                </Col>
            </Row>
        </Container> 
    )
}

export default connect ( null, { SetUser, SetLogged } )(Register);