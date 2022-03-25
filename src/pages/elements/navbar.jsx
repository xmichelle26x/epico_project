import {LinkContainer } from 'react-router-bootstrap'
import { Navbar, Container, Nav, Image} from 'react-bootstrap' 

function NavPage(){
    return(
        <Navbar style={{backgroundColor:'#2B2994'}}  expand='lg' >
            <Container>
            <Navbar.Brand href="https://epico.gob.ec/" target="blank"><Image style={{height: '50px'}} src="assets/logo_epico.png"></Image></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto navStyle">
                    <LinkContainer to="/">
                        <Nav.Link>Inicio</Nav.Link>
                    </LinkContainer>
                    {/* <LinkContainer to="/register">
                        <Nav.Link>Registro</Nav.Link>
                    </LinkContainer> */}
                    <LinkContainer to="/application">
                        <Nav.Link >Solicitud de BECA</Nav.Link>
                    </LinkContainer>
                </Nav>

                    <div >
                    <LinkContainer to="/login"> 
                        <a className="header-button" href="https://epico.gob.ec/ce/auth/login/home">Inicia sesión</a>		            
                    </LinkContainer>
                    </div>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavPage;