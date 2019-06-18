import React from "react";
import {Link} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";

class Login extends React.Component {
    render(){
        return(
            <div className="nav-login-btn container">
                <BrowserRouter>
                    <Link to="/LoginSection">
                        <input type="submit" value="Zaloguj" name="nav-login"/>
                    </Link>
                </BrowserRouter>
                <BrowserRouter>
                    <Link to="/RegisterSection">
                        <input type="submit" value="Załóż konto" name="nav-login"/>
                    </Link>
                </BrowserRouter>
            </div>
        )
    }
}

export default Login;