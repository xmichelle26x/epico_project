import { useState } from 'react';
import './App.css';
import Routing from './pages/routes/routing';

function App() {
  const [becas,setBecas] = useState(
    [ {
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
  );

  

  return (

    <div className="App">
      <Routing becas={ becas } setBecas={ setBecas }></Routing>
    </div> 
  );
}

export default App;
 