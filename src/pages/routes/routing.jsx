import { BrowserRouter, Routes, Route, Link} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import ApplicationForm from '../aplicant/applicationForm';
import MainPage from "../mainPage";
import Login from '../auth/login';
import Register from '../auth/register';
import NavPage from "../elements/navbar";
import FooterPage from "../elements/footer";
import Becas from "../aplicant/becas";

function Routing(){
    return(
        <BrowserRouter>
      
        <NavPage></NavPage>


        <Routes>
          <Route path="/" element={ <MainPage/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/becas" element={ <Becas/>} />
        </Routes>

        <FooterPage></FooterPage>

      </BrowserRouter>
    )
}

export default Routing;