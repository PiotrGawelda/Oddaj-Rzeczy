import React, { Component } from 'react';
import {Link} from "react-scroll";

class Header extends Component {
    render() {
        return(
            <header>
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
                Cya
                </Link>
            </header>
        )
    }
}

export default Header;