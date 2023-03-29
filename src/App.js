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
import DotEnv from './Pages/Dotenv';
import RDBMSList from './Pages/RDBMSList';


function App() {
  return (
    
      <Router basename='/CRUD-generator-Docs'>
        <Sidebar/>
        <div style={{marginLeft: "300px"}}>
          <Routes>

            <Route path="/intro" element={<Intro/>}/>
            <Route path='/start' element={<Start/>}/>
            <Route path='/rdbms-list' element={<RDBMSList/>}/>
            <Route path='/dotenv' element={<DotEnv/>}/>
            
          </Routes>
        </div>
      </Router>
    
  );
}

export default App;
