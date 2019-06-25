import React, {Component} from "react";
import {Link} from "react-scroll";
import Container from "react-bootstrap/Container";

class LoginLinks extends Component {
    constructor(props){
        super(props);
        this.state = {
            on: false
        }
    }

    handleClick = () => {
        this.setState({
            on: !this.state.on
        })
    };
    render() {
        return(
            <nav className="pg-navbar">
                <Container>
                    <div className="login-header-block">
                        <input type="submit" value="Witaj Agata" name="user-btn" onClick={this.handleClick}/>
                        <i className="fas fa-tools"></i>
                        {this.state.on && <ul>
                            <li>Profil</li>
                            <li>Ustawienia</li>
                            <li>Moje Zbiórki</li>
                            <li>Wyloguj</li>
                        </ul>}
                    </div>
                    <div className="nav-links-blocks">
                        <Link className="nav-links"
                              activeClass="active"
                              to="banner-section"
                              spy={true}
                              smooth={true}
                              hashSpy={true}
                              offset={-140}
                              duration={500}
                              delay={200}
                              isDynamic={true}
                              onSetActive={this.handleSetActive}
                              onSetInactive={this.handleSetInactive}
                              ignoreCancelEvents={false}
                        >
                            Start
                        </Link>

                        <Link className="nav-links"
                              activeClass="active"
                              to="tips-section"
                              spy={true}
                              smooth={true}
                              hashSpy={true}
                              offset={0}
                              duration={500}
                              delay={200}
                              isDynamic={true}
                              onSetActive={this.handleSetActive}
                              onSetInactive={this.handleSetInactive}
                              ignoreCancelEvents={false}
                        >
                            O co chodzi?
                        </Link>

                        <Link className="nav-links"
                              activeClass="active"
                              to="about-us-section"
                              spy={true}
                              smooth={true}
                              hashSpy={true}
                              offset={0}
                              duration={500}
                              delay={200}
                              isDynamic={true}
                              onSetActive={this.handleSetActive}
                              onSetInactive={this.handleSetInactive}
                              ignoreCancelEvents={false}
                        >
                            O nas
                        </Link>

                        <Link className="nav-links"
                              activeClass="active"
                              to="help-info-section"
                              spy={true}
                              smooth={true}
                              hashSpy={true}
                              offset={0}
                              duration={500}
                              delay={200}
                              isDynamic={true}
                              onSetActive={this.handleSetActive}
                              onSetInactive={this.handleSetInactive}
                              ignoreCancelEvents={false}
                        >
                            Fundacje i organizacje
                        </Link>

                    </div>
                </Container>
            </nav>
        )
    }
}


export default LoginLinks;