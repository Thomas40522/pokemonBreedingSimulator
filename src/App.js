import 'antd/dist/antd.css';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link

} from "react-router-dom";

import PokemonIndex from "./components/PokemonIndex";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<PokemonIndex/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
