import React, {Component} from "react";
import LoginLinks from "./LoginLinks";
import BgLoginHeader from "../../images/header_logged_img.jpg";
import Decoration from "../Decoration";

class LoginHeader extends Component{
    render() {
        return(
            <header style={{backgroundImage: `url(${BgLoginHeader})`}} className="login-header">
                <LoginLinks/>
                <div className="login-block">
                    <div className="login-info-block">
                        <p>Oddaj rzeczy, których już nie chcesz</p>
                        <p>POTRZEBUJĄCYM</p>
                        <Decoration/>
                        <p>Wystarczą 4 proste kroki:</p>
                    </div>
                    <div className="square-header-block">
                        <div className="square-header">
                            <p>1</p>
                            <p>Wybierz rzeczy</p>
                        </div>
                        <div className="square-header">
                            <p>2</p>
                            <p>Spakuj je w worki</p>
                        </div>
                        <div className="square-header">
                            <p>3</p>
                            <p>Wybierz fundację</p>
                        </div>
                        <div className="square-header">
                            <p>4</p>
                            <p>Zamów kuriera</p>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default LoginHeader;