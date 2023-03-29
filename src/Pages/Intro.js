import { Row, Col } from "reactstrap";
import DataBaseExampleImage from '../images/database-example1.png'

export default function Intro() {
    return<>
        <Row className="mt-4">
            <Col md="1"/>
            <Col md="8"> 
                <h1 className="font-sans-serif" style={{fontWeight: "700"}}>Introdução</h1>
                <br></br><br></br>


                <h3 className="font-sans-serif" style={{fontWeight: "700"}}>O que é CRUD-Generator?</h3>
                <hr></hr>

                <p className="font-sans-serif">
                    CRUD-Generator é uma aplicação backend, open-source, construída no modelo API REST, cuja principal funcionalidade é criar e manipular abstrações de sistemas. 
                    
                </p>

                <p className="font-sans-serif">
                    Cada abstração criada no CRUD-Generator permite gerar tabelas no banco de dados principal relacionando cada tabela com sua respectiva abstração.
                </p>


                <div className="text-center">
                    <img src={DataBaseExampleImage} style={{width: "800px"}}></img>
                </div>
                

                <p className="font-sans-serif">

                    Em outras palavras, CRUD-Generator fragmenta seu próprio banco de dados em bancos de dados menores. Cada fragmento pertence a um sistema cadastrado no CRUD-Generator.
                </p>

                <br></br>

                <h3 className="font-sans-serif" style={{fontWeight: "700"}}>CRUD-Generator é um Backend as a Service?</h3>
                <hr></hr>

                <p className="font-sans-serif">
                    CRUD-Generator funciona exatamente como um Backend as a Service, porém com uma diferença. Backends as a Service são sistemas que rodam em servidores web, enquanto que o CRUD-Generator foi projetado para rodar na máquina do desenvolvedor.
                </p>
                <p className="font-sans-serif">
                    Portanto, este software tem como objetivo ser uma ferramenta de testes para desenvolvedores que desejam projetar um frontend e ter um backend funcional de apoio para o projeto.
                </p>
                <br></br>
                <h3 className="font-sans-serif" style={{fontWeight: "700", color: "red"}}>ATENÇÃO!</h3>
                <hr></hr>

                <p className="font-sans-serif">
                    NÃO É RECOMENDADO subir instâncias do CRUD-Generator para ser utilizado em servidores web sem ajustes prévios. Este software não foi criado para rodar em servidores, foi feito para ser uma ferramenta de testes locais, portanto pode conter falhas de segurança. Não nos responsabilizamos por qualquer uso indevido da aplicação.
                </p>

            </Col>
            <Col md="3"/>
        
        </Row>
    
    
    </>
}