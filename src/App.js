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
import StartingApp from './Pages/StartingApp';
import FrontOperations from './Pages/FrontOperations';
import CreateSubsystem from './Pages/CreateSubsystem';


function App() {
  return (
    
      <Router basename='/CRUD-generator-Docs'>
        <Sidebar/>
        <div style={{marginLeft: "300px"}}>
          <Routes>

            <Route path="/intro" element={<Intro/>}/>
            <Route path='/first-steps' element={<Start/>}/>
            {/* <Route path='/rdbms-list' element={<RDBMSList/>}/> */}
            <Route path='/dotenv' element={<DotEnv/>}/>
            <Route path='/starting-app' element={<StartingApp/>}/>
            <Route path='/front-operations' element={<FrontOperations/>}/>
            <Route path='/create-subsystem' element={<CreateSubsystem/>}/>
            
          </Routes>
        </div>
      </Router>
    
  );
}

export default App;
