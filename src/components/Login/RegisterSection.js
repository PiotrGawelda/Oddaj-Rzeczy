import React, {Component} from "react"
import Container from "react-bootstrap/Container";
import Login from "./Login";
import {Link} from "react-scroll/modules";
import Decoration from "../Decoration";

class RegisterSection extends Component {
    render() {
        return(
            <header className="register-section">
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