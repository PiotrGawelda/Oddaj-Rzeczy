import React, {Component} from "react"
import Container from "react-bootstrap/Container";
import Login from "./Login";
import {Link} from "react-scroll/modules";
import Decoration from "../Decoration";

class LoginSection extends Component {
    render() {
        return(
            <header className="login-section">
                <nav className="pg-navbar">
                    <Container>
                        <Login/>
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

                            <Link className="nav-links"
                                  activeClass="active"
                                  to="footer"
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
                                Kontakt
                            </Link>
                        </div>
                    </Container>
                </nav>
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