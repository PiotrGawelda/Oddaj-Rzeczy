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

    handleOnChange = (name) => (event) => {
        this.setState({
            [name]: event.target.value
        })
    };

    login = () => {
        fetch("http://localhost:3001/users")
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
                            <input type="text" name="login-form" placeholder="Email" onChange={this.handleOnChange("username")}/>
                            <input type="password" name="login-form" placeholder="Hasło" onChange={this.handleOnChange("password")}/>
                         </div>
                        <input type="button" name="login-form" value="Przypomnij hasło" id="pass-forget" onClick={this.login}/>
                    </div>
                    <div className="login-block-btn">
                        <Link to="/RegisterSection" style={{textDecoration: `none`}}>
                            <input type="submit" name="login=form" value="Załóż konto" id="first-btn"/>
                        </Link>
                        <Link to="/LoggedIn" style={{textDecoration: `none`}}>
                            <input type="submit" name="login=form" value="Zaloguj się" onClick={this.submitLogin}/>
                        </Link>
                    </div>
                </section>
            </header>

        )
    }
}

export default LoginSection;