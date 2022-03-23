import './App.css';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import MainPage from './pages/mainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {LinkContainer} from 'react-router-bootstrap'
import { Navbar, Container, Nav, Image} from 'react-bootstrap' 
import ApplicationForm from './pages/aplicant/applicationForm';


function App() {
  return (
    <div className="App">


      <BrowserRouter>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="https://epico.gob.ec/" target="blank"><Image src="assets/logo_epico.png"></Image></Navbar.Brand>
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Main Page</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/register">
                <Nav.Link>Registro</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/application">
                <Nav.Link>Solicitud de BECA</Nav.Link>
              </LinkContainer>
            </Nav>
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
 