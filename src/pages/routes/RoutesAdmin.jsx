import { BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from "../mainPage";
import Login from '../auth/login';
import Register from '../auth/register';
import NavPage from "../components/navbar";
import FooterPage from "../components/footer";
import Becas from "../home/becas";
import { useEffect, useState } from "react";
import Dashboard from "../admin/Dashboard";

function RoutesAdmin(){

    return(
      <BrowserRouter>
        {/* <NavPage ></NavPage> */}
        <Routes>
          <Route path="/epico/" element={ <Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    )
}

export default RoutesAdmin;