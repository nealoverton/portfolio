import { HashRouter, Route, Routes } from 'react-router-dom';
import CavernOfWonder from './components/CavernOfWonder.js';
import Home from './components/Home.js';
import NavBar from './components/NavBar.js';
import './styles/styles.js';

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={
          <div className="App">
          <NavBar/>
          <Home/>
        </div>
        }/>

        <Route path='/cavern-of-wonder' element={<CavernOfWonder/>}/>
      </Routes>
      
    </HashRouter> 
  );
}

export default App;
