import React, { useState } from "react";
import {Form, Button, Container, Row, Col, Alert} from 'react-bootstrap';
import { connect } from "react-redux";
import {LinkContainer } from 'react-router-bootstrap'
import { useNavigate } from "react-router-dom";
import { SetUser } from "../../store/user/action";
import { SetLogged } from "../../store/logged/action";

const styleButton = {
    width:'100%',
    backgroundColor:'#0d6efd',
    marginTop: '10px'
}

const mapStateProps = ( state ) => {
    return {
        user : state.userReducer.user,
        logged : state.loggedReducer.logged
    }
}

function Login({ SetUser, SetLogged, logged }){
    const [ formUser, setFormUser ] = useState({
        identification : "",
        password : ""
    });
    const [ message, setMessage ] = useState( "" );
    const [ showAlert, setShowAlert ] = useState( false );
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);
    useState( () => {
        if( logged ){
            navigate("/");
        }

    }, []);
    const changeForm = ( e ) =>{
        
        setFormUser({
            ...formUser,
            [ e.target.name ] : e.target.value
        })
        
    }
    const authenticate = ( e ) => {
        e.preventDefault();
        setLoading( true );
        return new Promise((resolve) => {
            setTimeout(() => {
                const user = localStorage.getItem( formUser.identification );
                if( !user ){
                    setMessage("Al parecer no existe ningún usuario con esa identificación")
                    setShowAlert( true );
                }else{
                    var find = JSON.parse( user );
                    if( formUser.password !== find.password ){
                        setMessage("Contraseña incorrecta")
                        setShowAlert( true );
                    }else{
                        
                        SetUser({
                            ...find
                        });
                        SetLogged( true );
                        navigate("/");
                    }
                }
                
                setLoading( false );
            }, 1500);          
        });      
    }
    return(
        <Container style={{marginBottom:'60px',marginTop:'30px'}}>
            
        <Row className="login">
            <Col md={4}>
                <Row>
                    <Alert show={showAlert} variant="warning" onClose={() => setShowAlert(false)}>
                        <Alert.Heading>Ups</Alert.Heading>
                        <p dangerouslySetInnerHTML={{__html: message}}>
                        </p>
                        
                    </Alert>
                </Row>
                <h2 className='title'>Iniciar sesión</h2>
                <Form className="colForm" onSubmit={ (e) => authenticate(e) }>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" required onChange={ changeForm } name="identification" placeholder="N. Identificación" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control type="password" required onChange={ changeForm } name="password" placeholder="Contraseña" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Check type="checkbox" label="Recordarme" style={{textAlign:'left'}}/>
                    </Form.Group>

                    <Button variant="primary" disabled={ isLoading } size="lg" type="submit" className="styleButton">
                        {isLoading ? 'Loading…' : 'Ingresar'}
                    </Button>
                    <LinkContainer style={styleButton} to="/register"> 
                        <Button disabled={ isLoading } variant="primary" size="lg" type="button" >
                            Registrarse
                        </Button>
                    </LinkContainer>
                </Form>
            </Col>
        </Row>
    </Container>
    )
}


export default connect( mapStateProps, { SetUser, SetLogged })(Login);