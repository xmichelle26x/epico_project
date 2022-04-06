import { useState } from 'react';
import { Offcanvas, Image, Container } from 'react-bootstrap';

function Sidebar( { show, handleClose}){
    
    return(
      <Offcanvas show={show} onHide={handleClose}>
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
        </Offcanvas.Body>
      </Offcanvas>
    )
}


export default Sidebar;