import React, { Component } from 'react';
import '../../scss/components style/about-us-section-style.scss';
import Decoration from "../Decoration";
import PeopleImg from "../../images/about.jpg";

class AboutUsSection extends Component {
    render() {
        return(
            <section className="about-us-section">
                <div className="container block-center">
                    <div className="about-us-info">
                        <h2>O nas</h2>
                        <Decoration/>
                        <p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis.  Curabitur et ligula. Ut molestie a, ultricies porta urna.</p>
                    </div>
                    <div className="about-us-image">
                        <img src={PeopleImg} alt="People"/>
                    </div>
                </div>
            </section>
        )
    }
}

export default AboutUsSection;