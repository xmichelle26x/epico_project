import { Card, Col, Container, Image, ListGroup, ProgressBar, Row } from "react-bootstrap";

function Postulations(){
    return(
        <Container className="container-postulations justify-content-center">
            <Row>
                <ListGroup className="postulations-group">
                    <ListGroup.Item>
                        <Card className="postulation-card">
                            <Row>
                                <Col>
                                    <Image className="postulations-image" src="assets/becas/back.jpg"></Image>
                                </Col>
                                <Col className="postulation-body">
                                    <h3>Beca Back-End</h3>
                                    <ProgressBar variant="info" now={10} />
                                    <p>Se esta revisando tu aplicación, pronto se te notificara por correo cualquier novedad sobre tu proceso</p>
                                </Col>
                            </Row>
                        </Card>
                    </ListGroup.Item>
                </ListGroup>
            </Row>
        </Container>
    )
}

export default Postulations;