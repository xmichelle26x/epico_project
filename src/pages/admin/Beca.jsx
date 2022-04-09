import { useState } from 'react';
import {Modal, Form, Button, Spinner} from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

function Beca( { show, handleClose, becas, setBecas } ){
    const navigate = useNavigate();

    const { handleSubmit, formState } = useForm()
    const [ title, setTitle ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ date, setDate ] = useState("");
    const [ isSubmitting, setIsSubmiting ] = useState( !formState );
    
    function addBeca() {
        return new Promise(() => {
            setTimeout(() => {
            becas.push(
                {
                    "title" : "Data Science",
                    "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                    "image" : "assets/becas/data.jpg",
                    "endDate" : "10/10/2022"
                }
            )
            setBecas( becas );

            handleClose( ) ;
            setIsSubmiting( false )
            navigate("/becas");
          }, 1000);
        })
    }
    return(
        <Modal show={ show } className="modal-beca">

                <Modal.Body >
                    <Form className="colForm" onSubmit={handleSubmit(addBeca)}>
                        <Form.Group className="mb-3">
                            <Form.Label><b>Titulo</b></Form.Label>
                            <Form.Control required type="text" placeholder="Titulo" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label><b>Descripción</b></Form.Label>
                            <Form.Control required type="text" placeholder="Descripción" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label><b>Fecha tope</b></Form.Label>
                            <Form.Control required type="date" placeholder="Descripción" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label><b>Imagen</b></Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        {
                        isSubmitting ? 
                            <Spinner animation="border" variant="primary" />

                        :
                            <>
                                <Button variant="primary" onClick={handleClose}>
                                    Cancelar
                                </Button>
                                <Button variant="success" type='submit'>Guardar</Button>
                            </>
                        }
                    </Form>
                </Modal.Body>
        </Modal>
        
    )
}

export default Beca;