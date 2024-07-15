import { Link, useNavigate } from 'react-router-dom';
import { Row, Col, Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap';
import './Sidebar.css'
import GroupNav from './GroupNav';

export default function Sidebar() {

    const navigate = useNavigate();
    return <>
    
    <div className="sidebar">
      <ul className="nav flex-column">
        <li className="nav-item">
          {/* <a className="nav-link active" href="#section1">Section 1</a> */}
          <Link className='nav-link' to="/intro">Introdução</Link>
        </li>
        

        <GroupNav title="Execução sem Docker">
            <li className="nav-item">
                <Link className='nav-link' to="/first-steps" style={{fontWeight: 400}}>
                    Primeiros Passos
                </Link>
            </li>
            <li className="nav-item">
                <Link className='nav-link' to="/rdbms-list" style={{fontWeight: 400}}>
                    SGBD's suportados
                </Link>
            </li> 
            <li className="nav-item">
                <Link className='nav-link' to="/dotenv" style={{fontWeight: 400}}>
                    Variáveis de Ambiente
                </Link>
            </li>

            <li className="nav-item">
                <Link className='nav-link' to="/starting-app" style={{fontWeight: 400}}>
                    Iniciando Aplicação
                </Link>
            </li>
        </GroupNav>

        <GroupNav title="Execução com Docker">

            <li className="nav-item">
                <Link className='nav-link' to="/dotenv-docker" style={{fontWeight: 400}}>
                    Variáveis de Ambiente
                </Link>
            </li>

            <li className="nav-item">
                <Link className='nav-link' to="/starting-app-with-docker" style={{fontWeight: 400}}>
                    Iniciando aplicação
                </Link>
            </li>
        </GroupNav>

        <li className="nav-item">
            <Link className='nav-link' to="/front-operations">Painel de Controle</Link>
        </li>
        
        <li className="nav-item">
            <Link className='nav-link' to="/video-tutorial">Tutorial em Vídeo</Link>
        </li>

        {/* <li className="nav-item">
            <Link className='nav-link' to="/create-subsystem">Criar Subsistema</Link>
        </li> */}
        
      </ul>
    </div>


    </>
}