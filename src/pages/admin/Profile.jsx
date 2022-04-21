import { Button, Container, Form, Col, Row, Image } from "react-bootstrap";

function Profile(){
    return(
        <Container>
            <Form className="colForm">
                <Row>
                    <Col xs={12} sm={4} md={4}className='justify-content-md-center' >
                        <div className="col-image-profile">
                            <Image
                                alt="User Profile"
                                src="assets/user.jpg"
                                className="profile-image-admin"
                                />
                        </div>
                        <div className="d-grid gap-2">
                            <Button variant="outline-primary" size="lg">
                                Editar foto de perfil
                            </Button>
                            <Button variant="outline-success" size="lg">
                                Súbe tu CV
                            </Button>
                        </div>
                        
                    </Col>
                    <Col style={{textAlign:'left'}}>
                        <Form.Group className="mb-3">
                        <Form.Label htmlFor="name"><span>Nombres *</span></Form.Label>
                        <Form.Control  required type="text" name="name" id="name" placeholder="Juan Andrés"/>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label htmlFor="lastName"><span>Apellidos *</span></Form.Label>
                            <Form.Control  required type="text" name="lastName" id="lastName" placeholder="Salazar Aguilar"/>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label htmlFor="email"><span>Email *</span></Form.Label>
                            <Form.Control  required type="email" name="email" id="email" placeholder="correo@dominio.com"/>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label htmlFor="identification"><span>Cedula *</span></Form.Label>
                            <Form.Control  required type="text" name="identification" id="identification" placeholder="1215193242"/>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label htmlFor="birthday"><span>Fecha de Nacimiento *</span></Form.Label>
                            <Form.Control  required type="date" name="birthday" id="birthday"/>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label htmlFor="phone"><span>Celular *</span></Form.Label>
                            <Form.Control  required type="text" name="phone" id="phone" placeholder="0985219255"/>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label><span>Género *</span></Form.Label>
                            <div key="inline-gender"  className="mb-3">
                                <Form.Check inline value="male" type="radio" name="gender" id="male" label="Hombre" />
                                <Form.Check inline value="female" type="radio" name="gender" id="female" label="Mujer" />
                                <Form.Check inline value="other" type="radio" name="gender" id="other" label="Prefiero no decirlo" />
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label htmlFor="city"><span>Ciudad de residencia *</span></Form.Label>
                            <div key="inline-city" className="mb-3">
                                <Form.Check inline value="guayaquil" type="radio" name="city" id="guayaquil" label="Guayaquil" />
                                <Form.Check inline value="other" type="radio" name="city" id="other_city" label="Otro" />
                            </div>
                            <Form.Control type="text" id="otherCity" placeholder="Indique la ciudad"/>

                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label htmlFor="address"><span>Dirección domiciliaria *</span></Form.Label>
                            <Form.Control required type="text" name="address" id="address" placeholder="Tu respuesta"/>
                        </Form.Group>
                        <Form.Group className="mb-3" >
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
                        <Button variant="primary" size="lg" type="submit" className="styleButton">
                            Guardar
                        </Button>
                    </Col>  
                </Row> 
            </Form>
        </Container>
    )
}

export default Profile;