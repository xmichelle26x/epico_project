import { Offcanvas, Image, Container, ListGroup, Button, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { connect } from 'react-redux';
import { IoMdLogOut } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';
import { MdLibraryBooks } from 'react-icons/md';
import { BsClockHistory } from 'react-icons/bs';
import { SetUser } from "../../store/user/action";
import { SetLogged } from "../../store/logged/action";
import { useNavigate } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const mapStateProps = ( state ) => {
  return {
      user : state.userReducer.user
  }
}

function Sidebar( { show, handleClose, user,SetUser, SetLogged}){
    
  const navigate = useNavigate();
  const logOut = () => {
    SetLogged( false );
    SetUser( null );
    navigate("/");
    window.location.reload();
  }
    return(
      <Offcanvas className='sidebar-user' show={show } placement="end" onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Mi Perfil</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container >
            <Row className='justify-content-md-center' >
                <Col xs={12} sm={4} md={4} className="col-image" >
                  <Image
                  alt="User Profile"
                  src="assets/user.jpg"
                  className="profile-image-sidebar"
                  />
                </Col>
            </Row>
            <Row>
              <h3> {user.names } </h3>
            </Row>
            <Row>
              <Col>
                <ListGroup className='user-menu-list'>
                  <ListGroup.Item action className='user-menu-item'>
                    <FaUserCircle className='user-menu-icos'/>
                    <LinkContainer to="/profile" onClick={ () => handleClose() }> 
                      <a>Administrar Perfil</a>		            
                    </LinkContainer> 
                  </ListGroup.Item>
                  <ListGroup.Item action className='user-menu-item'>
                    <MdLibraryBooks className='user-menu-icos'/> 
                    <LinkContainer to="/postulaciones" onClick={ () => handleClose() }> 
                      <a>Mis Becas</a>		            
                    </LinkContainer> 
                    
                  </ListGroup.Item>
                  <ListGroup.Item action className='user-menu-item'>
                    <BsClockHistory className='user-menu-icos'/> 
                    <LinkContainer to="/default" onClick={ () => handleClose() }> 
                      <a>Becas en espera de confirmación</a>		            
                    </LinkContainer>
                    
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
            <Row className='logout-row'>
              <OverlayTrigger 
                key="top"
                placement="top"
                overlay={
                  <Tooltip >
                    <span>Cerrar Sesión.</span>
                  </Tooltip>
                }>
                <Button variant="outline-danger"  size='lg' onClick={ () => logOut() }>
                  <IoMdLogOut/>
                </Button>
              </OverlayTrigger>
            </Row>
            
            
          </Container>
          
        </Offcanvas.Body>
      </Offcanvas>
    )
}


export default connect ( mapStateProps,{ SetUser, SetLogged})(Sidebar);