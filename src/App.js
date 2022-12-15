import { HashRouter } from 'react-router-dom';
import Home from './components/Home.js';
import NavBar from './components/NavBar.js';
import './styles/styles.js';

function App() {
  return (
    <HashRouter>
      <div className="App">
      <NavBar/>
      <Home/>
    </div>
    </HashRouter>
    
  );
}

export default App;
