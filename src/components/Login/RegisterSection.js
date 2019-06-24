import React, {Component} from "react"
import Decoration from "../Decoration";
import Links from "../Header/Links";
import {Link} from "react-router-dom";

class RegisterSection extends Component {
    render() {
        return(
            <header className="register-section">
                <Links/>
                <section className="register-block">
                    <div className="pg-register-block">
                        <div className="register-block-form">
                            <h3>Załóż konto</h3>
                            <Decoration/>
                            <input type="text" name="register-form" placeholder="Email"/>
                            <input type="password" name="register-form" placeholder="Hasło"/>
                            <input type="password" name="register-form" placeholder="Powtórz hasło"/>
                        </div>
                    </div>
                    <div className="register-block-btn">
                        <Link to="/LoginSection" style={{textDecoration: `none`}}>
                            <input type="submit" name="register=form" value="Zaloguj się"/>
                        </Link>
                        <input type="submit" name="register=form" value="Załóż konto"/>
                    </div>
                </section>
            </header>
        )
    }
}

export default RegisterSection;