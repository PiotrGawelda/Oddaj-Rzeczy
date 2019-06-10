import React, { Component } from 'react';
import '../../scss/components style/banner-section-style.scss';
// import {Row, Col, Container} from "react-bootstrap";


class BannerSection extends Component {
    render() {
        return(
            <section className="banner-section">
                <div className="container">
                    <div className="banner-blocks">
                        <h1>10</h1>
                        <p>ODDANYCH WORKÓW</p>
                        <p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis</p>
                    </div>
                    <div className="banner-blocks">
                        <h1>5</h1>
                        <p>WSPARTYCH ORGANIZACJI</p>
                        <p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis</p>
                    </div>
                    <div className="banner-blocks">
                        <h1>7</h1>
                        <p>ZORGANIZOWANYCH ZBIÓREK</p>
                        <p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default BannerSection;