import React, { Component } from 'react';
import {Link} from "react-scroll";

class Links extends Component {
    render() {
        return(
            <nav className="navbar">
                <div className="container">
                    <div className="nav-links-blocks">
                        <Link className="nav-links"
                              activeClass="active"
                              to="banner-section"
                              spy={true}
                              smooth={true}
                              hashSpy={true}
                              offset={-140}
                              duration={500}
                              delay={800}
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
                              delay={800}
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
                              delay={800}
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
                              delay={800}
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
                              delay={800}
                              isDynamic={true}
                              onSetActive={this.handleSetActive}
                              onSetInactive={this.handleSetInactive}
                              ignoreCancelEvents={false}
                        >
                            Kontakt
                        </Link>
                    </div>
            </div>
            </nav>
        )
    }
}

export default Links;