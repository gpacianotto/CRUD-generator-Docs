import { Row, Col } from "reactstrap";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
export default function RDBMSList() {
    
    
    return <>
        <Row className="mt-4">
            <Col md="1"/>
            <Col md="8"> 
                <h1 className="font-sans-serif" style={{fontWeight: "700"}}>SGBD's Suportados</h1>
                <br></br><br></br>


                <h3 className="font-sans-serif" style={{fontWeight: "700"}}>Lista de SGBD's suportados</h3>
                <hr></hr>
                <p className="font-sans-serif">
                    <ul>
                        <li>
                            PostgreSQL
                        </li>
                        <li>
                            MYSQL
                        </li>
                        <li>
                            MariaDB
                        </li>
                        <li>
                            SQLite
                        </li>
                        <li>
                            Microsoft SQL Server
                        </li>
                    </ul>
                </p>

                <br></br>

                <h3 className="font-sans-serif" style={{fontWeight: "700"}}>Recomendação</h3>
                <hr></hr>

                <p className="font-sans-serif">
                    Recomenda-se que o MYSQL seja utilizado, pois foi o SGBD mais testado durante o desenvolvimento.
                </p>

            </Col>
            <Col md="3"/>
        
        </Row>
    </>
}