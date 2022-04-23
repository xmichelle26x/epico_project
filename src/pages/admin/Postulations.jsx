import { useEffect } from "react";
import { Card, Col, Container, Image, ListGroup, ProgressBar, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { SetUser } from "../../store/user/action";

const mapStateToProps = ( state ) => {
    return {
        user : state.userReducer.user,
        logged : state.loggedReducer.logged
    }
}
function Postulations( { user, SetUser, logged }){
    const navigate = useNavigate();

    useEffect( () =>{
        if( !logged ){
            navigate("/");
        }
    })
    return(
        <Container className="container-postulations justify-content-center">
            <Row>
                <ListGroup className="postulations-group">
                    {
                        user.becas.length > 0 ?
                        user.becas.map( ( e, i )=>(
                            <ListGroup.Item key={ i }> 
                                <Card className="postulation-card">
                                    <Row>
                                        <Col>
                                            <Image className="postulations-image" src={e.image}></Image>
                                        </Col>
                                        <Col className="postulation-body">
                                            <h3>{ e.title }</h3>
                                            <ProgressBar variant="info" now={10} />
                                            <p>Se esta revisando tu aplicación, pronto se te notificara por correo cualquier novedad sobre tu proceso</p>
                                        </Col>
                                    </Row>
                                </Card>
                            </ListGroup.Item>
                        ))
                        :
                        <>Al parecer no has postulado a ninguna beca aún, puedes hacerlo aqui:
                        <LinkContainer to="/becas"> 
                            <a>Becas</a>		            
                        </LinkContainer> </>
                    }
                </ListGroup>
            </Row>
        </Container>
    )
}

export default connect(mapStateToProps, { SetUser }) (Postulations);