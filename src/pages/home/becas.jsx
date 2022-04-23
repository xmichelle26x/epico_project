import { useEffect, useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { SetUser } from "../../store/user/action";
import { connect } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
const mapStateToProps = ( state ) => {
    return {
        user : state.userReducer.user,
        logged : state.loggedReducer.logged
    }
} 
const notify = () => toast.success("Te has postulado correctamente, muy pront te llegsara un correo con mas info!", {
    position: "top-right",
    autoClose: 1300,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    light : false 
});
function Becas( { user, SetUser, logged }){
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);

    useEffect( ()=>{
        setFormUser( user );
        window.scrollTo(0,0);
    }, []);
    const [ formUser, setFormUser ] = useState({
        name : "",
        lastName : "",
        identification : "",
        email : "",
        password : "",
        repeatPassword : "",
        img : "assets/user.jpg",
        becas : []
    });
    const addBecaToUser = ( e) =>{
        setLoading( true );

        new Promise( ()=>{
            setTimeout(() => {

                if( logged){
                    formUser.becas.push( e );
                    SetUser(
                        {
                            ...formUser,
                        }
                    )
                    notify();
                }else{
                    navigate( "/application");
                }
                setLoading( false );

            }, 800 );
        })
    }
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
                                        <Button variant="primary" disabled={isLoading} onClick={ () => addBecaToUser( e )} size="lg">
                                            { isLoading ? "Espere..." : "¡Aplica aquí!"}
                                        </Button>
                                        <small className="text-muted">Puedes aplicar hasta el <b>{ e.endDate}</b></small>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>                    
                )) }
            </div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
        </div>       
    )
}

export default connect( mapStateToProps , {  SetUser } )( Becas );