import { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import CavernOfWonder from './components/CavernOfWonder.js';
import Home from './components/Home.js';
import NavBar from './components/NavBar.js';
import './styles/styles.js';

function App() {
  
  const [sideBarDropDownIsOpen, setSideBarDropDownIsOpen] = useState(false)

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={
          <div className="App">
          <NavBar sideBarDropDownIsOpen={sideBarDropDownIsOpen} setSideBarDropDownIsOpen={setSideBarDropDownIsOpen}/>
          <Home sideBarDropDownIsOpen={sideBarDropDownIsOpen} setSideBarDropDownIsOpen={setSideBarDropDownIsOpen}/>
        </div>
        }/>

        <Route path='/cavern-of-wonder' element={<CavernOfWonder/>}/>
      </Routes>
      
    </HashRouter> 
  );
}

export default App;
