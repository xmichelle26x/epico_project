import {LinkContainer } from 'react-router-bootstrap'
import { Navbar, Container, Nav, Image, Button} from 'react-bootstrap' 
import Sidebar from '../admin/Sidebar';
import { useState } from 'react';

function NavPage( { logged , setLogged } ){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return(
        <Navbar style={{backgroundColor:'#2B2994'}}  className="NavBar" expand='lg' >
            <Container >
                <Navbar.Brand href="https://epico.gob.ec/" target="blank">
                    <Image style={{height: '40px'}} src="assets/logo_epico.png"></Image>
                </Navbar.Brand>
                { logged ? 
                    <Navbar.Brand>
                        <Button variant="outline-light" onClick={ () => handleShow()}>
                            <Image
                            alt="User Profile"
                            src="assets/user.jpg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top profile-image" />
                            <span className='user-name-navbar'>Kevin Vergara</span>
                        </Button>
                    </Navbar.Brand>
                    : 
                    <></>
                }
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                
                <Nav className="me-auto navStyle">
                    <LinkContainer to="/">
                        <a className="text-nav">Nosotros</a>
                    </LinkContainer>
                    <LinkContainer to="/becas">
                        <a className="text-nav">Becas disponibles</a>
                    </LinkContainer>                   
                </Nav>
                <Nav>
                    { logged 
                        ? 
                        <Button className="header-button" onClick={ () => setLogged( false ) }> Cerrar Sesión </Button>
                        :
                        <LinkContainer to="/login" className="justify-content-end"> 
                            <a className="header-button">Iniciar sesión</a>		            
                        </LinkContainer> 
                    }
                </Nav>

                </Navbar.Collapse>
            </Container>
            <Sidebar show={ show } handleClose={ handleClose }/>
        </Navbar>
    )
}

export default NavPage;