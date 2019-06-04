import React, { Component } from 'react';
import '../../scss/components style/header-style.scss';
import {Link} from "react-scroll";

class Header extends Component {
    render() {
        return(
            <header className="Header">
                <Link activeClass="active"
                      to="target"
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                      offset={50}
                      duration={500}
                      delay={1000}
                      isDynamic={true}
                      onSetActive={this.handleSetActive}
                      onSetInactive={this.handleSetInactive}
                      ignoreCancelEvents={false}
                >
                Start
                </Link>

                <Link activeClass="active"
                      to="target"
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                      offset={50}
                      duration={500}
                      delay={1000}
                      isDynamic={true}
                      onSetActive={this.handleSetActive}
                      onSetInactive={this.handleSetInactive}
                      ignoreCancelEvents={false}
                >
                    O co chodzi?
                </Link>

                <Link activeClass="active"
                      to="target"
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                      offset={50}
                      duration={500}
                      delay={1000}
                      isDynamic={true}
                      onSetActive={this.handleSetActive}
                      onSetInactive={this.handleSetInactive}
                      ignoreCancelEvents={false}
                >
                    O nas
                </Link>

                <Link activeClass="active"
                      to="target"
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                      offset={50}
                      duration={500}
                      delay={1000}
                      isDynamic={true}
                      onSetActive={this.handleSetActive}
                      onSetInactive={this.handleSetInactive}
                      ignoreCancelEvents={false}
                >
                    Fundacje i organizacje
                </Link>

                <Link activeClass="active"
                      to="target"
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                      offset={50}
                      duration={500}
                      delay={1000}
                      isDynamic={true}
                      onSetActive={this.handleSetActive}
                      onSetInactive={this.handleSetInactive}
                      ignoreCancelEvents={false}
                >
                    Kontakt
                </Link>
            </header>
        )
    }
}

export default Header;