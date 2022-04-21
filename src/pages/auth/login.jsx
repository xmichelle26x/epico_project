import React, { useState } from "react";
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
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

    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);
    useState( () => {
        if( logged ){
            navigate("/");
        }

    }, [])
    const authenticate = ( e ) => {
        e.preventDefault();
        setLoading( true );
        return new Promise((resolve) => {
            setTimeout(() => {
                SetUser({
                    "names" : "Kevin Vergara"
                });
                SetLogged( true );
                navigate("/");
            }, 1500);          
        });      
    }
    return(
        <Container style={{marginBottom:'60px',marginTop:'30px'}}>
            
        <Row className="login">
            <Col md={4}>
                
                <h2 className='title'>Iniciar sesión</h2>
                <Form className="colForm" onSubmit={ (e) => authenticate(e) }>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="N. Identificación" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control type="password" placeholder="Contraseña" />
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