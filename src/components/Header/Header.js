import React, { Component } from 'react';
import '../../scss/components style/header-style.scss';
import Links from "./Links";

class Header extends Component {
    render() {
        return(
            <>
                <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"/>
                <Links/>
            </>
        )
    }
}

export default Header;