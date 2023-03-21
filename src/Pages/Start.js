import { Row, Col } from "reactstrap";

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
                    Para executar uma instância do CRUD-Generator é necessário ter instalado o <a href="https://nodejs.org/en">Node.js</a>.
                </p>

                <br></br>

                <h3 className="font-sans-serif" style={{fontWeight: "700"}}>Onde obter o código fonte?</h3>
                <hr></hr>

                <p className="font-sans-serif">
                    Para obter o código fonte do CRUD-Generator você pode baixar ou clonar o repositório dele no GitHub <a href="https://github.com/gpacianotto/CRUD-Generator">aqui</a>.
                </p>
                

            </Col>
            <Col md="3"/>
        
        </Row>
    
    
    </>
}