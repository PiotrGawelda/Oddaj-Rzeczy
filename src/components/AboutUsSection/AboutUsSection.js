import React, { Component } from 'react';
import '../../scss/components style/about-us-section-style.scss';

class AboutUsSection extends Component {
    render() {
        return(
            <section className="about-us-section">
                <div className="container about-us-section">
                    <div className="about-us-info">
                        <h2>O nas</h2>
                        <img src="../.././images/decoration.png" alt="Black frame"/>
                    </div>
                    <div className="about-us-image">
                        <img src="../../images/about.jpg" alt="People"/>
                    </div>
                </div>
            </section>
        )
    }
}

export default AboutUsSection;