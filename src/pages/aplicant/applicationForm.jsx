import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const data = [
    {
        "id": 1,
        "description": "Pregunta defecto 1",
        "options": [
            {
                "code": "Q001",
                "description": "Opcion 1",
                "isCorrect": true
            },
            {
                "code": "Q002",
                "description": "Opcion 2",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 2,
        "description": "Pregunta defecto 2",
        "options": [
            {
                "code": "Q004",
                "description": "Opcion 1",
                "isCorrect": false
            },
            {
                "code": "Q005",
                "description": "Opcion 2",
                "isCorrect": true
            },
            {
                "code": "Q006",
                "description": "Opcion 3",
                "isCorrect": false
            },
            {
                "code": "Q007",
                "description": "Opcion 4",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 3,
        "description": "Pregunta defecto 4",
        "options": [
            {
                "code": "Q008",
                "description": "Opcion 1",
                "isCorrect": false
            },
            {
                "code": "Q009",
                "description": "Opcion 2",
                "isCorrect": true
            }
        ]
    },
    {
        "id": 4,
        "description": "Pregunta defecto 4",
        "options": [
            {
                "code": "Q010",
                "description": "Opcion 1",
                "isCorrect": false
            },
            {
                "code": "Q011",
                "description": "Opcion 2",
                "isCorrect": true
            }
        ]
    },
    {
        "id": 5,
        "description": "Pregunta defecto 5",
        "options": [
            {
                "id": 1,
                "code": "Q012",
                "description": "Opcion 1",
                "isCorrect": true
            },
            {
                "id": 2,
                "code": "Q013",
                "description": "Opcion 2",
                "isCorrect": false
            }
        ]
    }
]

const styleContainer = {
    marginTop:'50px',
    marginBottom:'80px'
}
function ApplicationForm() {

    const [questions, setQuestions] = useState([]);

    useEffect(() => {

        // HERE YOU MUST USE AN AXIOS REQUEST TO GET THE API DATA
        setQuestions(data)
    }, [])
    return (
        <Container style={styleContainer}>
                <h2 className='title'>Formulario Primera Fase</h2>
                <p style={{marginBottom:'40px'}}>Completa por favor el siguiente formulario para continuar a la siguiente fase</p>
            <Row className="login">
                <Col md={3}>
                        <Form>
                        {questions.map(e => (
                            <Form.Group className="mb-3" controlId={e.id}>
                                <Form.Label>{e.description}</Form.Label>

                                {e.options.map(o => (
                                    <div key="inline-radio" className="mb-3">
                                        <Form.Check inline type="radio" name={`Q-${e.id}`} id={`inline-${o.id}`} label={o.description} />
                                    </div>

                                ))}
                            </Form.Group>
                        ))}
                        <Button style={{width:'50%', marginTop:'50px'}}>Enviar</Button>
                        </Form>
                </Col>
            </Row>
       
    </Container >
    )

}

export default ApplicationForm;