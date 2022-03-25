import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';


function FooterPage() {
    return (

        <footer color="blue" className="font-small pt-4 mt-4" style={{ backgroundColor: '#E5E6E7' }}>
            <Container fluid className="text-center text-md-left">
                <Row>
                    <Col md="6">
                        <div  >
                            <div >
                                <div class="image" style={{marginTop:'30px'}}>
                                    <img src="assets/logo_epico2.png" alt="ÉPICO LOGO" className="im"/>

                                    <div style={{display: 'flex',justifyContent:'space-between',width: '100px', margin:'auto',paddingTop:'10px',fontSize: '30px',color:'#2B2994'}}> 
                                        <FaFacebook />
                                        <FaInstagram />
                                        <FaTwitter />
                                    </div>
                                </div>
                                    


                            </div>
                        </div>
                    </Col>
                    <Col md="6">
                        <h5 className="title">Contáctanos</h5>
                        <div class="wpb_text_column wpb_content_element ">
                            <div class="wpb_wrapper">
                                <p className="text-footer">Av. Carlos Julio Arosemena<br />
                                    Plaza Guayarte<br />
                                    Guayaquil – Ecuador<br />
                                    (04) 390 6090<br />
                                    <a href="mailto:info@epico.gob.ec">info@epico.gob.ec</a></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className='page-footer'>
                <p style={{ color: "white" }}>Todos los derechos reservados ® 2021 ÉPICO</p>
            </Container>
        </footer>
    )
}


export default FooterPage;