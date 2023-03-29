import { Row, Col } from "reactstrap";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Link } from "react-router-dom";
// import dotenv from 'react-syntax-highlighter/dist/esm/languages/prism/dotenv';
// SyntaxHighlighter.registerLanguage('dotenv', dotenv);

export default function Start() {
    return<>
        <Row className="mt-4">
            <Col md="1"/>
            <Col md="8"> 
                <h1 className="font-sans-serif" style={{fontWeight: "700"}}>Primeiros Passos</h1>
                <br></br><br></br>


                <h3 className="font-sans-serif" style={{fontWeight: "700"}}>Pré-requisitos</h3>
                <hr></hr>

                <p className="font-sans-serif">
                    Para executar uma instância do CRUD-Generator é necessário ter instalado o <a href="https://nodejs.org/en" target="_blank">Node.js</a>.
                </p>

                <br></br>

                <h3 className="font-sans-serif" style={{fontWeight: "700"}}>Onde obter o código fonte?</h3>
                <hr></hr>

                <p className="font-sans-serif">
                    Para obter o código fonte do CRUD-Generator você pode baixar ou clonar o repositório dele no GitHub <a href="https://github.com/gpacianotto/CRUD-Generator" target="_blank">aqui</a>.
                </p>
                
                <br></br>

                <h3 className="font-sans-serif" style={{fontWeight: "700"}}>Instalar Dependências</h3>
                <hr></hr>

                <p className="font-sans-serif">
                    Para que o CRUD-Generator rode em seu computador, é necessário instalar algumas dependências que o projeto utiliza para funcionar. Para isso, abra um terminal na pasta raíz do projeto e rode os seguintes comandos:
                </p>

                <SyntaxHighlighter language="bash" >
                    {`npm install`}
                </SyntaxHighlighter>

                <br></br>

                <h3 className="font-sans-serif" style={{fontWeight: "700"}}>DotEnv</h3>
                <hr></hr>

                <p className="font-sans-serif">
                    Para que o CRUD-Generator rode em seu computador, é necessário criar um arquivo '.env' na raíz do projeto. Veja <Link to="/dotenv"> nesta seção</Link> quais variáveis você deve definir neste arquivo.
                </p>

                

            </Col>
            <Col md="3"/>
        
        </Row>
    
    
    </>
}