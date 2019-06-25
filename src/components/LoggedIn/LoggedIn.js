import React, {Component} from "react";
import LoginHeader from "../LoginHeader";
import WarningSection from "../WarningSection";
import StepsItemSection from "../StepsItemSection";
import Footer from "../Footer";


class LoggedIn extends Component{
    render() {
        return(
            <>
                <LoginHeader/>
                <WarningSection/>
                <StepsItemSection/>
                <Footer/>
            </>
        )
    }
}

export default LoggedIn;