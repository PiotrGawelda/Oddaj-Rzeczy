import React, {Component} from "react"
import Decoration from "../Decoration";
import Links from "../Header/Links";

class LoginSection extends Component {
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
                            <input type="text" name="login-form" placeholder="Hasło"/>
                         </div>
                        <input type="submit" name="login-form" value="Przypomnij hasło" id="pass-forget"/>
                    </div>
                    <div className="login-block-btn">
                            <input type="submit" name="login=form" value="Załóż konto"/>
                            <input type="submit" name="login=form" value="Zaloguj się"/>
                    </div>
                </section>
            </header>

        )
    }
}

export default LoginSection;