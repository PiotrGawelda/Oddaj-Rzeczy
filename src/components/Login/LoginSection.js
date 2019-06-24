import React, {Component} from "react"
import Decoration from "../Decoration";
import Links from "../Header/Links";
import {Link} from "react-router-dom";

class LoginSection extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        };
}

 submitLogin = () => {
        
 };

    render() {
        return(
            <header className="login-section">
               <Links/>
                <section className="login-block">
                    <div className="pg-login-block">
                        <div className="login-block-form">
                            <h3>Zaloguj się</h3>
                            <Decoration/>
                            <input type="text" name="login-form" placeholder="Email"/>
                            <input type="password" name="login-form" placeholder="Hasło"/>
                         </div>
                        <input type="submit" name="login-form" value="Przypomnij hasło" id="pass-forget"/>
                    </div>
                    <div className="login-block-btn">
                        <Link to="/RegisterSection" style={{textDecoration: `none`}}>
                            <input type="submit" name="login=form" value="Załóż konto" id="first-btn"/>
                        </Link>
                            <input type="submit" name="login=form" value="Zaloguj się" onClick={this.submitLogin}/>
                    </div>
                </section>
            </header>

        )
    }
}

export default LoginSection;