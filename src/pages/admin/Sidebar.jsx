import { Offcanvas, Image, Container, ListGroup, Accordion } from 'react-bootstrap';
import { FaUsers } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


function Sidebar( { show, handleClose}){

  const navigate = useNavigate();

  const goToBecas = () =>{
    handleClose( false );
    navigate('/becas');
  }
    
    return(
      <Offcanvas className="sidebar" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Panel Administrativo</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container className='profile-pic-container'>
            <Image
            alt="User Profile"
            src="assets/user.jpg"
            className="profile-image-sidebar"
            />
            
          </Container>
          <h3>Luis Rejas</h3>
          <Accordion >
            <Accordion.Item eventKey="0">
              <Accordion.Header>Cuenta</Accordion.Header>
              <Accordion.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item action > <FaUsers/> Información personal</ListGroup.Item>
                  <ListGroup.Item action > <FaUsers/> Configuración</ListGroup.Item>
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Usuarios</Accordion.Header>
              <Accordion.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item action > <FaUsers/> Información personal</ListGroup.Item>
                  <ListGroup.Item action > <FaUsers/> Configuración</ListGroup.Item>
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Becas/Programas</Accordion.Header>
              <Accordion.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item action onClick={ () => goToBecas() }> <FaUsers/> Becas/Programas</ListGroup.Item>
                  <ListGroup.Item action > <FaUsers/> Agregar Beca</ListGroup.Item>
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Offcanvas.Body>
      </Offcanvas>
    )
}


export default Sidebar;