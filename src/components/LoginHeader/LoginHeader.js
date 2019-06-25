import React, {Component} from "react";
import LoginLinks from "./LoginLinks";
import BgLoginHeader from "../../images/header_logged_img.jpg";

class LoginHeader extends Component{
    render() {
        return(
            <header style={{backgroundImage: `url(${BgLoginHeader})`}} className="login-header">
                <LoginLinks/>
            </header>
        )
    }
}

export default LoginHeader;