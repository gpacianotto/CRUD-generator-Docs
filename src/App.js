import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  HashRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Sidebar from './Components/Sidebar';
import Intro from './Pages/Intro';
import Start from './Pages/Start';

function App() {
  return (
    
      <Router>
        <Sidebar/>
        <div style={{marginLeft: "200px"}}>
          <Routes>

            <Route path="/intro" element={<Intro/>}/>
            <Route path='/start' element={<Start/>}/>
            
          </Routes>
        </div>
      </Router>
    
  );
}

export default App;
