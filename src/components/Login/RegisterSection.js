import React, {Component} from "react"
import Decoration from "../Decoration";
import Links from "../Header/Links";

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
                            <input type="text" name="register-form" placeholder="Hasło"/>
                            <input type="text" name="register-form" placeholder="Powtórz hasło"/>
                        </div>
                    </div>
                    <div className="register-block-btn">
                        <input type="submit" name="register=form" value="Załóż konto"/>
                        <input type="submit" name="register=form" value="Zaloguj się"/>
                    </div>
                </section>
            </header>
        )
    }
}

export default RegisterSection;