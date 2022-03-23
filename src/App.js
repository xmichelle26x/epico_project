import './App.css';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import MainPage from './pages/mainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {LinkContainer} from 'react-router-bootstrap'
import { Navbar, Container, Nav, Image} from 'react-bootstrap' 
import ApplicationForm from './pages/aplicant/applicationForm';

const navStyle={
  paddingTop: '25px',
  paddingBottom: '26px',
  paddingLeft: '18px',
  paddingRight: '18px'
}

function App() {
  return (

    <div className="App">

      <BrowserRouter>
      
        <Navbar bg="primary" variant="dark" expand='lg'>
          <Container>
            <Navbar.Brand href="https://epico.gob.ec/" target="blank"><Image style={{height: '50px'}} src="assets/logo_epico.png"></Image></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" style={{navStyle}}>
              <LinkContainer to="/">
                <Nav.Link >Inicio</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/register">
                <Nav.Link>Registro</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Login">
                <Nav.Link>Iniciar sesión</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/application">
                <Nav.Link>Solicitud de BECA</Nav.Link>
              </LinkContainer>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>


        <Routes>
          <Route path="/" element={ <MainPage/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/application" element={ <ApplicationForm/>} />
        </Routes>

      </BrowserRouter>
    </div> 
  );
}

export default App;
 