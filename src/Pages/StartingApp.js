import { Row, Col } from "reactstrap";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Link } from "react-router-dom";


export default function StartingApp() {
    return<>
        <Row className="mt-4">
            <Col md="1"/>
            <Col md="8"> 
                <h1 className="font-sans-serif" style={{fontWeight: "700"}}>Iniciando Aplicação</h1>
                <br></br><br></br>


                <h3 className="font-sans-serif" style={{fontWeight: "700"}}>Rodar o projeto</h3>
                <hr></hr>
                <p className="font-sans-serif">
                    Para iniciar a aplicação abra um terminal na pasta raíz do CRUD-GENERATOR e digite o seguinte comando:
                </p>

                <SyntaxHighlighter language="bash" >
                    {`node app.js`}
                </SyntaxHighlighter>


                <p className="font-sans-serif">
                    Lembre-se que para que a aplicação rode normalmente é necessário que você tenha configurado seu arquivo <mark><i>'.env'</i></mark>. Veja como fazer isso <Link to="/dotenv"> nesta seção.</Link> 
                </p>

                <br/><br/>

                <p className="font-sans-serif">
                    Caso retorne a seguinte mensagem:
                </p>

                <SyntaxHighlighter language="bash" >
                    {`'Database Synced successfully!'`}
                </SyntaxHighlighter>
                
                <p className="font-sans-serif">
                    Significa que sua aplicação já está rodando! Verifique em seu SGBD se as tabelas <mark><i>account-sessions</i></mark>, <mark><i>accounts</i></mark>, <mark><i>meta-collumns</i></mark>, <mark><i>meta-tables</i></mark>, <mark><i>systems</i></mark> e <mark><i>users</i></mark> foram criadas em seu banco de dados.
                </p>

            </Col>
            <Col md="3"/>
        
        </Row>
    
    
    </>
}