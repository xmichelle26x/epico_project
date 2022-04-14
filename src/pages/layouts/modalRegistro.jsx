import { Modal, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
function ModalRegistro( props ){

    const notify = () => toast.success('Done!', {
        position: "top-right",
        autoClose: 1300,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        light : false 
    });
    const navigate = useNavigate();

    return(
        <div>
            <Modal show={props.show} onHide={ () => props.setShow( false )  }  >
                <Modal.Header closeButton>
                    <Modal.Title>En hora buena!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Hemos registrado tu aplicación!</p>            
                    <p>Para seguir con el proceso debes registrarte</p>    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={ () => props.setShow( false )  } >
                        Lo hare después
                    </Button>
                    <Button variant="primary" onClick={ () => {props.setShow( false ); navigate("/register") /*notify()*/ }} >
                        Registrar
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                /> */}
        </div>
    )
}

export default ModalRegistro;