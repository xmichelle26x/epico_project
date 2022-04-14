import { BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from "../mainPage";
import Login from '../auth/login';
import Register from '../auth/register';
import NavPage from "../components/navbar";
import FooterPage from "../components/footer";
import Becas from "../home/becas";
import Applicant from "../home/Applicant";

function RoutesDefault( { logged,setLogged }){

    return(
      <BrowserRouter>
        <NavPage ></NavPage>
        <Routes>
          <Route path="/" element={ <MainPage/>}/>
          <Route path="/login" element={<Login  logged={ logged } setLogged={ setLogged } />} />
          <Route path="/register" element={<Register />} />
          <Route path="/becas" element={ <Becas/>} />
          <Route path="/application" element={ <Applicant/>} />
        </Routes>
        <FooterPage></FooterPage>
      </BrowserRouter>
    )
}

export default RoutesDefault;