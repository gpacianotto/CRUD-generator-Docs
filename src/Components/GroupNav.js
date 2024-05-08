import { useState } from "react";
import { Link } from "react-router-dom";
import { Collapse } from "reactstrap";
import "./Sidebar.css"

export default function GroupNav(props) {
    
    const [active, setActive] = useState(false);

    const {title, children} = props

    return <>
        <Link className="nav-link" onClick={() => {setActive(!active)}}>
            {title}
        </Link>

        <Collapse isOpen={active} style={{marginLeft: "10%"}}>
            {children}
        </Collapse>
    </>
}