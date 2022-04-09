import { useEffect } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Becas( { becas } ){
    const navigate = useNavigate();
    useEffect( ()=>{
        window.scrollTo(0,0);
    }, [])
    return(
        <div>
            <h1 className="text-justify primaryColor" style={{marginTop:'20px', marginBottom:'20px'}}>Aplica a nuestras becas disponibles</h1>
            <div className='cardContainer'>   
                { becas.map( ( e,i ) => ( 
                    <Row key={ i }>
                        <Col>              
                            <Card  border="primary" style={{ borderRadius : "15px" }}>
                                <Card.Img variant="top" style={{ paddingTop : "20px" }} src={ e.image } />
                                <Card.Body>
                                    <Card.Title><h2>{ e.title }</h2></Card.Title>
                                    <Card.Text>{ e.description }</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <div className="d-grid gap-2">
                                        <Button variant="primary" onClick={ () => navigate("/application")} size="lg">
                                            ¡Aplica aquí!
                                        </Button>
                                        <small className="text-muted">Puedes aplicar hasta el <b>{ e.endDate}</b></small>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>                    
                )) }
            </div>
        </div>       
    )
}

export default Becas;