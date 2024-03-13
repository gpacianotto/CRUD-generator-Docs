import { Row, Col } from "reactstrap";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Link } from "react-router-dom";
import Print1 from '../images/screenshot-2.png'
import Print2 from '../images/screenshot-3.png'
import Print3 from '../images/screeenshot-4.png'
import Print4 from '../images/screenshot-5.png'
import Print5 from '../images/screenshot-6.png'
import Print6 from '../images/screenshot-7.png'
import Print7 from '../images/screenshot-8.png'

export default function FrontOperations() {
    return<>
        <Row className="mt-4">
            <Col md="1"/>
            <Col md="8"> 
                <h1 className="font-sans-serif" style={{fontWeight: "700"}}>Painel de Controle</h1>
                <br></br><br></br>


                <h3 className="font-sans-serif" style={{fontWeight: "700"}}>Funcionamento</h3>
                <hr></hr>
                <p className="font-sans-serif">
                    Uma vez que sua aplicação CRUD-Generator tenha sido <Link to="/starting-app">iniciada</Link>, é possível que você execute operações em sua aplicação utilizando o <a href="https://gpacianotto.github.io/crud-generator-front/" target="_blank">painel de controle</a> do CRUD-Generator. 
                </p>
                <br></br>
                <p className="font-sans-serif">
                    <span style={{color: "red", fontWeight: 700}}>ATENÇÃO: </span>Este painel de controle foi desenvolvido para que funcione em conjunto com a aplicação CRUD-Generator backend, portanto se em algum momento o processo do CRUD-Generator for interrompido ou encerrado o Painel de controle já não funcionará corretamente.
                </p>
                
                <br></br>

                <h3 className="font-sans-serif" style={{fontWeight: "700"}}>Confirmação de Conexão</h3>
                <hr></hr>

                <p className="font-sans-serif">
                    Ao abrir o painel de controle, você receberá uma confirmação de que o painel está conectado ao CRUD-generator. 
                </p>

                <div className="text-center">
                    <img src={Print1} style={{width: "400px", borderRadius: "20px", border: "2px solid rgba(0, 0, 0, 0.3)", }}/>
                </div>

                <br></br>

                <h3 className="font-sans-serif" style={{fontWeight: "700"}}>Configurações Iniciais</h3>
                <hr></hr>
                
                <p className="font-sans-serif">
                    Depois de confirmar a conexão com o CRUD-Generator, o painel irá pedir sua permissão para criar uma abstração do próprio painel no CRUD-Generator. Essa abstração é necessária para verificações que o CRUD-Generator faz em alguns momentos durante a utilização do mesmo.
                </p>

                <div className="text-center">
                    <img src={Print2} style={{width: "400px", borderRadius: "20px", border: "2px solid rgba(0, 0, 0, 0.3)", }}/>
                </div>

                <br></br>

                <p className="font-sans-serif">
                    Depois de confirmar a conexão com o CRUD-Generator, o painel irá pedir sua permissão para criar uma abstração do próprio painel no CRUD-Generator. Essa abstração é necessária para verificações que o CRUD-Generator faz em alguns momentos durante a execução do mesmo. Então, clique em <mark><i>'OK'</i></mark> para continuar
                </p>

                <div className="text-center">
                    <img src={Print3} style={{width: "400px", borderRadius: "20px", border: "2px solid rgba(0, 0, 0, 0.3)", }}/>
                </div>

                <br></br>

                <p className="font-sans-serif">
                    Depois de criar a abstração, o painel irá exibir a confirmação como na imagem acima. É importante que você se atente ao <mark><i>'Token do sistema'</i></mark>, este token será utilizado no próximo passo da nossa configuração. Por isso, copie ele em sua area de transferência.
                </p>

                <div className="text-center">
                    <img src={Print4} style={{width: "800px" }}/>
                </div>

                <br></br>

                <p className="font-sans-serif">
                    Depois abra a tela de configurações do Painel de Controle, conforme imagem acima.
                </p>
                <div className="text-center">
                    <img src={Print5} style={{width: "400px", borderRadius: "20px", border: "2px solid rgba(0, 0, 0, 0.3)", }}/>
                </div>

                <br></br>
                <p className="font-sans-serif">
                    Agora, cole o <mark><i>'Token do sistema'</i></mark> de sua aplicação no campo <mark><i>'Token do Sistema Root'</i></mark> do menu, como está mostrado na imagem acima. Depois, clique em "salvar".
                </p>

                <br></br>

                <h3 className="font-sans-serif" style={{fontWeight: "700"}}>Crie sua conta Root</h3>
                <hr></hr>

                <p className="font-sans-serif">
                    Para que você tenha o controle sobre outras aplicações, crie uma conta do tipo <mark><i>'root'</i></mark> preenchendo o formulário presente logo abaixo da tela de login: <mark><i>'Crie sua Conta!'</i></mark> 
                </p>

                <div className="text-center">
                    <img src={Print6} style={{width: "800px" }}/>
                </div>

                <br></br>
                <p className="font-sans-serif">
                    Depois clique em <mark><i>'Criar Conta'</i></mark> para finalizar
                </p>

                <div className="text-center">
                    <img src={Print7} style={{width: "800px" }}/>
                </div>

                <br></br>
                <p className="font-sans-serif">
                    Não se esqueca de infomar no campo <mark><i>'Token do Sistema'</i></mark> o token do sistema root criado anteriormente.
                </p>

                <br></br>

                <h3 className="font-sans-serif" style={{fontWeight: "700"}}>O que significa criar uma conta no CRUD-Generator?</h3>
                <hr></hr>

                <p className="font-sans-serif">
                    Sempre que se cria uma conta neste formulário, o CRUD-Generator associa um usuário (caso não exista, ele cria um usuário associado ao email fornecido) a um sub-sistema dentro do CRUD-Generator, por isso é necessário informar o <mark><i>'Token do Sistema'</i></mark> na criação desta conta. Um usuário pode ter várias contas, mas apenas um sistema por vez, ou seja, um usuário não pode ter duas contas num mesmo sistema, mas pode ter duas contas em sistemas distintos.
                </p>

                <br></br>

                <h3 className="font-sans-serif" style={{fontWeight: "700"}}>Acesso ao painel de controle</h3>
                <hr></hr>

                <p className="font-sans-serif">
                    Para acessar o painel de controle e suas funções, basta logar na conta <mark><i>'root'</i></mark> que você acabou de criar na tela de login.
                </p>

            </Col>
            <Col md="3"/>
        
        </Row>
    
    
    </>
}