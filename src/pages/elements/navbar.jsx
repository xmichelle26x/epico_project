import {LinkContainer } from 'react-router-bootstrap'
import { Navbar, Container, Nav, Image} from 'react-bootstrap' 

function NavPage(){
    return(
        <Navbar style={{backgroundColor:'#2B2994'}}  expand='lg' >
            <Container >
            <Navbar.Brand href="https://epico.gob.ec/" target="blank"><Image style={{height: '40px'}} src="assets/logo_epico.png"></Image></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                
                <Nav className="me-auto navStyle">
                    <LinkContainer to="/">
                        <a  className="text-nav">Nosotros</a>
                    </LinkContainer>
                    <LinkContainer to="/application">
                        <a  className="text-nav">Solicitud de BECA</a>
                    </LinkContainer>
                </Nav>

                    <div >
                    <LinkContainer to="/login"> 
                        <a className="header-button">Iniciar sesión</a>		            
                    </LinkContainer>
                    </div>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavPage;