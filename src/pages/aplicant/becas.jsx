import { Row, Col, Card, Button } from 'react-bootstrap';


const becas = [ {
    "title" : "Beca Front",
    "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    "image" : "assets/becas/front.jpg",
    "endDate" : "10/10/2022"
}, {
    "title" : "Beca Back-End",
    "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    "image" : "assets/becas/back.jpg",
    "endDate" : "10/10/2022"
},{
    "title" : "Data Science",
    "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    "image" : "assets/becas/data.jpg",
    "endDate" : "10/10/2022"
}]



function Becas(){
    return(
        <div className='cardContainer'>
            <h1>Observas nuestras becas disponibles</h1>
            { becas.map( ( e ) => ( 
                <Row >
                    <Col>              
                    <Card border="primary" >
                        <Card.Img variant="top" src={ e.image } />
                        <Card.Body>
                        <Card.Title><h2>{ e.title }</h2></Card.Title>
                        <Card.Text>{ e.description }</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <div className="d-grid gap-2">
                                <Button variant="primary" size="lg">
                                    Aplica aqui!
                                </Button>
                                <small className="text-muted">Puedes aplicar hasta el <b>{ e.endDate}</b></small>
                            </div>
                        </Card.Footer>
                    </Card>
                    </Col>
                </Row>                    
            )) }

        </div>
        
    )
}

export default Becas;