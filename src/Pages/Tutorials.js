import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

export default function Tutorials() {
    return <>
    <Row className="mt-4">
        <Col md="1"/>
        <Col md="8">

            <h1 className="font-sans-serif" style={{fontWeight: "700"}}>Tutoriais</h1>
            <br></br><br></br>

            <h3 className="font-sans-serif" style={{fontWeight: "700"}}>1. Introdução</h3>
            <hr></hr>

            <p className="font-sans-serif">
                Neste tutorial consta uma breve introdução sobre o CRUD-Generator. 
            </p>

            <iframe width="100%" height="75%" src="https://www.youtube.com/embed/i2J7hvC5v08?si=Xgrq_pxg0nThsPjY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen/>

            <p></p>
            <hr></hr>
            
            <h3 className="font-sans-serif" style={{fontWeight: "700"}}>2. Instalação</h3>
            <hr></hr>

            <p className="font-sans-serif">
                Neste tutorial consta o processo de instalação do CRUD-Generator.
            </p>

            <iframe width="100%" height="75%" src="https://www.youtube.com/embed/BiX_c_dcYpE?si=HgEpfTJupnfr32RC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <p></p>
            <hr></hr>

            <h3 className="font-sans-serif" style={{fontWeight: "700"}}>3. Primeiros passos</h3>
            <hr></hr>

            <p className="font-sans-serif">
                Neste tutorial consta os primeiros passos e primeiras configurações para a utilização do CRUD-Generator.
            </p>
            
            <iframe width="100%" height="75%" src="https://www.youtube.com/embed/crgCZ337Gso?si=IrStcQ1Kp_imRa-g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
            <p></p>
            <hr></hr>

            <h3 className="font-sans-serif" style={{fontWeight: "700"}}>4. Manipulação dos Dados</h3>
            <hr></hr>

            <p className="font-sans-serif">
                Neste tutorial consta o processo de manipulação dos dados nas entidades de cada sub-sistema.
            </p>

            <iframe width="100%" height="75%" src="https://www.youtube.com/embed/-lDzcyXk6-c?si=kBgPqT5d-oWude3P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
        </Col>
        <Col md="3"/>
    </Row>
    
    </>
}