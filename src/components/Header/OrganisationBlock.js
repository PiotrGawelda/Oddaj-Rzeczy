import React from "react"
import Decoration from "../Decoration";
import {Link} from "react-router-dom";

const OrganisationBlock = () => {
    return(
        <div className="header-help-position">
            <div className="header-start-help">
                <h2>Zacznij pomagac! Oddaj niechciane rzeczy w zaufane ręce</h2>
                <Decoration/>
            </div>
            <Link to="/LoginSection"><button>ODDAJ RZECZY</button></Link>
            <Link to="/RegisterSection"><button>ZORGANIZUJ ZBIÓRKĘ</button></Link>
        </div>
    )
};


export default OrganisationBlock;