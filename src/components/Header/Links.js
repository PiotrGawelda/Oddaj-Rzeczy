import React, { Component } from 'react';
import {Link} from "react-scroll";

class Links extends Component {
    render() {
        return(
            <header className="navbar">
                <div className="nav-links">
                    <Link activeClass="active"
                          to="banner-section"
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
                        Start
                    </Link>

                    <Link activeClass="active"
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

                    <Link activeClass="active"
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

                    <Link activeClass="active"
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

                    <Link activeClass="active"
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
            </header>
        )
    }
}

export default Links;