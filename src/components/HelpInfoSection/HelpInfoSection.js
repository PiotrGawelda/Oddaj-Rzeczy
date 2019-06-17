import React, { Component } from 'react';
import '../../scss/components style/help-info-section-style.scss';
import Decoration from "../Decoration";
import SectionSlider from "./Slider";

class HelpInfoSection extends Component {
    render() {
        return(
            <section className="container">
                <div className="help-info-section">
                    <div className="help-info-block">
                        <div>
                            <h2>Komu pomagamy?</h2>
                            <Decoration/>
                        </div>
                        <button>Fundacjom</button>
                        <button>Organizacjom pozarządowym</button>
                        <button>Lokalnym zbiórkom</button>
                        <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagamy i czego potrzebują.</p>
                        <SectionSlider/>
                    </div>
                </div>
            </section>
        )
    }
}

export default HelpInfoSection;