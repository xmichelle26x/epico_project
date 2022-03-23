import './App.css';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import MainPage from './pages/mainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav} from 'react-bootstrap' 
import ApplicationForm from './pages/aplicant/applicationForm';


function App() {
  return (
    <div className="App">

      <BrowserRouter>

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link  to="/">Main Page</Link>
              <Link  to="/register">Register</Link>
              <Link  to="/login">Login</Link>
              <Link to="/application">Solicitud de Beca</Link>
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
 