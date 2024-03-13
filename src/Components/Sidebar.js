import { Link, useNavigate } from 'react-router-dom';
import { Row, Col, Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap';
import './Sidebar.css'

export default function Sidebar() {

    const navigate = useNavigate();
    return <>
    
    <div className="sidebar">
      <ul className="nav flex-column">
        <li className="nav-item">
          {/* <a className="nav-link active" href="#section1">Section 1</a> */}
          <Link className='nav-link' to="/intro">Introdução</Link>
        </li>
        <li className="nav-item">
            <Link className='nav-link' to="/first-steps">Primeiros Passos</Link>
        </li>

        <li className="nav-item">
            <Link className='nav-link' to="/rdbms-list">SGBD's suportados</Link>
        </li>

        <li className="nav-item">
            <Link className='nav-link' to="/dotenv">Variáveis de Ambiente</Link>
        </li>

        <li className="nav-item">
            <Link className='nav-link' to="/starting-app">Iniciando Aplicação</Link>
        </li>

        <li className="nav-item">
            <Link className='nav-link' to="/front-operations">Painel de Controle</Link>
        </li>

        <li className="nav-item">
            <Link className='nav-link' to="/create-subsystem">Criar Subsistema</Link>
        </li>
        
      </ul>
    </div>


    </>
}