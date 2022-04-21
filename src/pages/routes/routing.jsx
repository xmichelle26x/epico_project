import { BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from "../mainPage";
import Login from '../auth/Login';
import Register from '../auth/Register';
import NavPage from "../layouts/navbar";
import FooterPage from "../layouts/footer";
import Becas from "../home/becas";
import { useEffect, useState } from "react";
import Applicant from "../home/Applicant";
import Postulations from "../admin/Postulations";
import Profile from "../admin/Profile";
import Default from "../admin/Default";

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
          <Route path="/application" element={ <Applicant/>} />
          <Route path="/postulaciones" element={ <Postulations/>}/>
          <Route path="/profile" element={ <Profile/>}/>
          <Route path="/default" element={ <Default/>}/>
        </Routes>
        <FooterPage></FooterPage>
      </BrowserRouter>
    )
}

export default Routing;