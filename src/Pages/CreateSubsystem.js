import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

export default function CreateSubsystem() {
    return <>
    <Row className="mt-4">
        <Col md="1"/>
        <Col md="8">

            <h1 className="font-sans-serif" style={{fontWeight: "700"}}>Criar Subsistema</h1>
            <br></br><br></br>

            <h3 className="font-sans-serif" style={{fontWeight: "700"}}>Pré Requisitos</h3>
            <hr></hr>

            <p className="font-sans-serif">
                Para que você crie um subsistema a partir do sistema <mark><i>'root'</i></mark> faça o login na conta do tipo <mark><i>'root'</i></mark> que você criou na configuração do painel de controle <Link to="/front-operations">aqui</Link>. 
            </p>

            <h3 className="font-sans-serif" style={{fontWeight: "700"}}>Cadastrando Subsistema</h3>
            <hr></hr>
            
        </Col>
        <Col md="3"/>
    </Row>
    
    </>
}