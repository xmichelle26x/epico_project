import React, { useEffect, useState } from "react";
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
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
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);
    const authenticate = ( e ) => {
        e.preventDefault();
        setLoading( true );
        return new Promise((resolve) => {
            setTimeout(() => {
                SetUser({
                    "names" : "Kevin Vergara"
                });
                SetLogged( true );
                setLoading( false );
                navigate("/");
            }, 1500);
            
        });
        
    }
    useEffect( ()=>{
        window.scrollTo(0,0);
    }, [])
    return(
            <Container style={{marginBottom:'60px',marginTop:'30px'}}>            <Row className="login">
                <Col  md={4} >
                <h2 className='title'>Registro</h2>
                <Form className="colForm" onSubmit={ (e) => authenticate(e) }>
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