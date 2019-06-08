import React, { Component } from 'react';
import '../../scss/components style/header-style.scss';
import Links from "./Links";

class Header extends Component {
    render() {
        return(
            <>
                <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"/>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
                      integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
                      crossOrigin="anonymous"/>
                <Links/>
            </>
        )
    }
}

export default Header;