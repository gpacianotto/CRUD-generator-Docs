import { Row, Col } from "reactstrap";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Link } from "react-router-dom";
import Screenshot1 from '../images/screenshot-1.png'
// import dotenv from 'react-syntax-highlighter/dist/esm/languages/prism/dotenv';
// SyntaxHighlighter.registerLanguage('dotenv', dotenv);

export default function DotEnv() {
    return<>
        <Row className="mt-4">
            <Col md="1"/>
            <Col md="8"> 
                <h1 className="font-sans-serif" style={{fontWeight: "700"}}>Variáveis de Ambiente</h1>
                <br></br><br></br>

                <p className="font-sans-serif">
                    Nesta página estão descritas todas as variáveis de ambiente que devem ser definidas em um arquivo <mark><i>'.env'</i></mark> na raíz do projeto para que o CRUD-Generator funcione corretamente.
                </p>

                <div className="text-center mb-4">
                    <img src={Screenshot1} style={{width: "700px"}}></img>
                </div>

                <h3 className="font-sans-serif" style={{fontWeight: "700"}}>1. DB_USERNAME</h3>
                <hr></hr>

                <SyntaxHighlighter language="dot" >
                    {`DB_USERNAME='root'`}
                </SyntaxHighlighter>
                <p className="font-sans-serif">
                    Essa variável de ambiente remete ao seu nome de usuário cadastrado no seu SGBD.
                </p>

                <br></br>

                <h3 className="font-sans-serif" style={{fontWeight: "700"}}>2. DB_PASSWORD</h3>
                <hr></hr>

                <SyntaxHighlighter language="dot" >
                    {`DB_PASSWORD='password123'`}
                </SyntaxHighlighter>
                <p className="font-sans-serif">
                    Essa variável de ambiente remete à sua senha cadastrada no seu SGBD.
                </p>

                <br></br>

                <h3 className="font-sans-serif" style={{fontWeight: "700"}}>3. DB_NAME</h3>
                <hr></hr>

                <SyntaxHighlighter language="dot" >
                    {`DB_NAME='webSystem1'`}
                </SyntaxHighlighter>
                <p className="font-sans-serif">
                    Essa variável de ambiente remete ao nome do banco de dados que você criou em seu SGBD.
                </p>

                <br></br>

                <h3 className="font-sans-serif" style={{fontWeight: "700"}}>4. DB_HOST</h3>
                <hr></hr>

                <SyntaxHighlighter language="dot" >
                    {`DB_HOST='localhost'`}
                </SyntaxHighlighter>
                <p className="font-sans-serif">
                Essa variável de ambiente especifica o endereço do host onde o seu banco de dados está sendo executado. Geralmente, o valor padrão é 'localhost', o que significa que o banco de dados está sendo executado na mesma máquina que o seu servidor. No entanto, se você estiver usando um serviço de hospedagem de banco de dados ou se o seu banco de dados estiver em outra máquina na rede, você precisará alterar o valor dessa variável para apontar para o host correto.
                </p>

                <br></br>

                <h3 className="font-sans-serif" style={{fontWeight: "700"}}>5. HASH_SALT_ROUNDS</h3>
                <hr></hr>

                <SyntaxHighlighter language="dot" >
                    {`HASH_SALT_ROUNDS='10'`}
                </SyntaxHighlighter>
                <p className="font-sans-serif">
                Essa variável de ambiente determina um número inteiro que definirá qual a complexidade do algoritmo que irá criptografar as senhas cadastradas no seu sistema. Quanto maior a complexidade, mais seguro, mas também maior será o processamento necessário. O valor padrão é '10'. 
                
                <br/> <br/> <b>Atenção:</b> coloque este valor sempre com aspas simples, mesmo sendo ele um valor inteiro.
                </p>

                <br></br>

                <h3 className="font-sans-serif" style={{fontWeight: "700"}}>6. ROOT_SYSTEM_ID</h3>
                <hr></hr>

                <SyntaxHighlighter language="dot" >
                    {`ROOT_SYSTEM_ID='1'`}
                </SyntaxHighlighter>

                <b>Atenção:</b> coloque o valor sempre com aspas simples, mesmo sendo ele um valor inteiro.
                <br/><br/>

                <p className="font-sans-serif">
                Essa variável de ambiente especifica qual será o número identificador do sistema root (que é uma abstração do Painel de Controle do CRUD-Generator). Recomenda-se que, após sua definição, o número identificador não seja mais alterado, pois este ID será sempre utilizado para realizar operações com o sistema raiz.<br/><br/>
                
                

                <p>Caso seja necessária a mudança você precisará: <br/><br/>

                    <ol>
                        <li>
                            Deletar seu banco de dados inteiro (isso acarretará a perda de todos os dados já inseridos).
                        </li>

                        <li>
                            Criar um banco de dados vazio com o mesmo nome definido em <mark><i>DB_NAME</i></mark> e iniciar a aplicação novamente.
                        </li>
                        
                    </ol>

                </p>

                <br/> 
                </p>

                <br></br>

            </Col>
            <Col md="3"/>
        
        </Row>
    
    
    </>
}