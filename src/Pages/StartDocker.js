import { Col, Row } from "reactstrap";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { Link } from "react-router-dom";

export default function StartDocker() {
    
    return <>
    
    <Row className="mt-4">
        <Col md="1"/>
        <Col md="8"> 
            <h1 className="font-sans-serif" style={{fontWeight: "700"}}>Primeiros Passos</h1>
            <br></br><br></br>


            <h3 className="font-sans-serif" style={{fontWeight: "700"}}>Pré-requisitos</h3>
            <hr></hr>


            <p className="font-sans-serif">
                Para executar uma instância do CRUD-Generator em um Contêiner Docker é necessário que o <a href="https://docs.docker.com/engine/" target="_blank">Docker Engine</a> esteja instalado em sua máquina.
            </p> 
            

            <br></br>

            <h3 className="font-sans-serif" style={{fontWeight: "700"}}>Onde obter o código fonte?</h3>
            <hr></hr>

            <p className="font-sans-serif">
                Para obter o código fonte do CRUD-Generator você pode baixar ou clonar o repositório dele no GitHub <a href="https://github.com/gpacianotto/CRUD-Generator" target="_blank">aqui</a>.
            </p>
            <br></br>

            <h3 className="font-sans-serif" style={{fontWeight: "700"}}>DotEnv</h3>
            <hr></hr>

            <p className="font-sans-serif">
                Para que o CRUD-Generator rode em seu computador, é necessário criar um arquivo '.env' na raíz do projeto. Veja <Link to="/dotenv"> nesta seção</Link> quais variáveis você deve definir neste arquivo.
            </p>

            <br></br>

            <h3 className="font-sans-serif" style={{fontWeight: "700"}}>Construir Imagens</h3>
            <hr></hr>

            <p className="font-sans-serif">
                Para construir a imagem do CRUD Generator no Docker e subir seu Contêiner, utilize o seguinte comando.
            </p>

            <SyntaxHighlighter language="bash" >
                {`docker compose up --build --detach`}
            </SyntaxHighlighter>
        
            <p className="font-sans-serif">
                Caso esteja utilizando o plugin do docker compose, adicione o hífen ao comando:
            </p>

            <SyntaxHighlighter language="bash" >
                {`docker-compose up --build --detach`}
            </SyntaxHighlighter>

            <br></br>

            <h3 className="font-sans-serif" style={{fontWeight: "700"}}>Subir Contêineres</h3>
            <hr></hr>
            
            <p className="font-sans-serif">
                Caso já tenha a imagem construída e deseja apenas subir o contêiner novamente, basta utilizar o comando:
            </p>

            <SyntaxHighlighter language="bash" >
                {`docker compose up`}
            </SyntaxHighlighter>

            <p className="font-sans-serif">
                Caso esteja utilizando o plugin do docker compose, adicione o hífen ao comando:
            </p>

            <SyntaxHighlighter language="bash" >
                {`docker-compose up`}
            </SyntaxHighlighter>

            <br></br>

            <h3 className="font-sans-serif" style={{fontWeight: "700"}}>Derrubar Contêineres</h3>
            <hr></hr>
            
            <p className="font-sans-serif">
                Caso queira derrubar os contêineres da aplicação, execute o seguinte comando:
            </p>

            <SyntaxHighlighter language="bash" >
                {`docker compose down`}
            </SyntaxHighlighter>

            <p className="font-sans-serif">
                Caso esteja utilizando o plugin do docker compose, adicione o hífen ao comando:
            </p>

            <SyntaxHighlighter language="bash" >
                {`docker-compose down`}
            </SyntaxHighlighter>


        </Col>
        <Col md="3"/>
    
    </Row>
    
    
    </>
}