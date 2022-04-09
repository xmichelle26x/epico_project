import { BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ApplicationForm from '../landing/applicationForm';
import MainPage from "../mainPage";
import Login from '../auth/login';
import Register from '../auth/register';
import NavPage from "../components/navbar";
import FooterPage from "../components/footer";
import Becas from "../landing/becas";
import { useEffect, useState } from "react";
import BecasAdmin from "../admin/BecasAdmin";

function Routing({becas, setBecas }){


    const [ logged, setLogged ] = useState( false );

    useEffect( ()=>{
    }, [ logged ])
    return(
      <BrowserRouter>
        <NavPage logged={ logged } setLogged={ setLogged }></NavPage>
        <Routes>
          <Route path="/" element={ <MainPage/>}/>
          <Route path="/login" element={<Login setLogged={ setLogged }/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/aplica" element={ <Becas becas={ becas }/>} />
          <Route path="/application" element={ <ApplicationForm/>} />
          <Route path="/becas" element={ <BecasAdmin becas={ becas } setBecas={ setBecas }/>}/>
        </Routes>
        <FooterPage></FooterPage>
      </BrowserRouter>
    )
}

export default Routing;