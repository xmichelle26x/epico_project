import { useEffect, useState } from "react";
import { Button, Container, Form, Col, Row, Image } from "react-bootstrap";
import { connect } from "react-redux";
import { SetUser } from "../../store/user/action";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
const mapStateToProps = ( state ) => {
    return {
        user : state.userReducer.user,
        logged : state.loggedReducer.logged
    }
}
const notify = () => toast.success('Done!', {
    position: "top-right",
    autoClose: 1300,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    light : false 
});
function Profile( { user, SetUser, logged } ){

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
        img : "assets/user.jpg"
    });
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();
    useEffect( ()=>{
        if( logged ){
            setFormUser( user );
        }else{
            navigate("/");
        }
    }, [])


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

    const save = ( e ) =>{
        e.preventDefault();
        setLoading( true )
        new Promise(
            setTimeout( () =>{
                SetUser( formUser );
                setLoading( false );
                notify();
            }, 800 )
        )
        
        // if( !localStorage.getItem( formUser.identification ) ){
        //     localStorage.setItem( formUser.identification, JSON.stringify( formUser ) )
        // }else{
        //     setShowAlert( true );
        // }
    }
    const changeImage = ( e ) =>{

        var blobUrl = URL.createObjectURL( e.target.files[0] ) ;
        setFormUser(
            { ...formUser, img : blobUrl }
        ) ;

    }
    return(
        <Container>
            <Form className="colForm" onSubmit={ ( e ) => save( e ) }>
                <Row>
                    <Col xs={12} sm={4} md={4}className='justify-content-md-center' >
                        <div className="col-image-profile">
                            <Image
                                alt="User Profile"
                                src={ formUser.img }
                                className="profile-image-admin"
                                />
                        </div>
                        <div className="d-grid gap-2">
                            <Form.Group controlId="formFile" title="Editar foto de perfil" onChange={ ( e ) => changeImage ( e )} className="mb-3">
                                <Form.Label>Cambia tu foto de perfil</Form.Label>
                                <Form.Control type="file" size="sm"/>
                            </Form.Group>
                            <Button variant="outline-success" size="lg">
                                Súbe tu CV
                            </Button>
                        </div>
                        
                    </Col>
                    <Col style={{textAlign:'left'}}>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="name"><span>Nombres *</span></Form.Label>
                                    <Form.Control value={ formUser.name } onChange={ changeForm } required type="text" name="name" id="name" placeholder="Juan Andrés"/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" >
                                    <Form.Label htmlFor="lastName"><span>Apellidos *</span></Form.Label>
                                    <Form.Control value={ formUser.lastName } onChange={ changeForm } required type="text" name="lastName" id="lastName" placeholder="Salazar Aguilar"/>
                                </Form.Group>
                            </Col>
                        </Row>  
                        <Row>
                            <Col>   
                                <Form.Group className="mb-3" >
                                    <Form.Label htmlFor="identification"><span>Cedula *</span></Form.Label>
                                    <Form.Control value={ formUser.identification } onChange={ changeForm } required type="text" name="identification" id="identification" placeholder="1215193242"/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" >
                                    <Form.Label htmlFor="email"><span>Email *</span></Form.Label>
                                    <Form.Control value={ formUser.email } onChange={ changeForm }  required type="email" name="email" id="email" placeholder="correo@dominio.com"/>
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
                            <Col>
                                <Form.Group className="mb-3" >
                                    <Form.Label htmlFor="phone"><span>Celular *</span></Form.Label>
                                    <Form.Control value={ formUser.phone } onChange={ changeForm } required type="text" name="phone" id="phone" placeholder="0985219255"/>
                                </Form.Group>
                            </Col>
                            <Col xs={6}>
                                <Form.Group className="mb-3" >
                                    <Form.Label><span>Género *</span></Form.Label>
                                    <div key="inline-gender" className="mb-3">
                                        <Form.Check inline checked={ formUser.gender === "male" } onChange={ changeForm } value="male" type="radio" name="gender" id="male" label="Hombre" />
                                        <Form.Check inline checked={ formUser.gender === "female" } onChange={ changeForm } value="female" type="radio" name="gender" id="female" label="Mujer" />
                                        <Form.Check inline checked={ formUser.gender === "other" } onChange={ changeForm } value="other" type="radio" name="gender" id="other" label="Prefiero no decirlo" />
                                    </div>
                                </Form.Group>
                            </Col>
                        </Row>
                        
                        <Form.Group className="mb-3" >
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
                        <Form.Group className="mb-3" >
                            <Form.Label htmlFor="city"><span>Estado Civil *</span></Form.Label>
                            <div key="inline-marital-single" className="mb-3">
                                <Form.Check checked={ formUser.marital_status === "single" } onChange={ changeForm }  inline type="radio" name="marital_status" id="single" value="single" label="Soltero" />
                                <Form.Check checked={ formUser.marital_status === "married" } onChange={ changeForm } inline type="radio" name="marital_status" id="married" value="married" label="Casado" />
                                <Form.Check checked={ formUser.marital_status === "divorced" } onChange={ changeForm } inline type="radio" name="marital_status" id="divorced" value="divorced" label="Divorciado" />
                                <Form.Check checked={ formUser.marital_status === "free_union" } onChange={ changeForm } inline type="radio" name="marital_status" id="free_union" value="free_union" label="Union Libre" />
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label htmlFor="address"><span>Dirección domiciliaria *</span></Form.Label>
                            <Form.Control value={ formUser.address } onChange={ changeForm } required type="text" name="address" id="address" placeholder="Tu respuesta"/>
                        </Form.Group>
                        <Button variant="primary" disabled={ isLoading } size="lg" type="submit" className="styleButton">
                            {isLoading ? 'Loading…' : 'Guardar'}
                        </Button>
                    </Col>  
                </Row> 
            </Form>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
        </Container>
    )
}

export default connect(mapStateToProps, { SetUser }) (Profile);