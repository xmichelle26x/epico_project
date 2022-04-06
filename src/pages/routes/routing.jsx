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
import Dashboard from "../admin/Dashboard";

function Routing(){

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
          <Route path="/becas" element={ <Becas/>} />
          <Route path="/application" element={ <ApplicationForm/>} />
        </Routes>
        <FooterPage></FooterPage>
      </BrowserRouter>
    )
}

export default Routing;