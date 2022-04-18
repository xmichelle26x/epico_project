import './App.css';
import Routing from './pages/routes/routing';
import { Provider } from 'react-redux'
import store from './store/index';

function App() {
  return (

    <Provider store={ store }>
      <div className="App">
        <Routing></Routing>
      </div> 
    </Provider>
  );
}

export default App;
 