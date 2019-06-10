import React, { Component } from 'react';
import '../../scss/components style/help-info-section-style.scss';
import Decoration from "../Decoration";

class HelpInfoSection extends Component {
    render() {
        return(
            <section className="container">
                <div className="help-info-section">
                    <div className="help-info-block">
                        <h2>Komu pomagamy?</h2>
                        <Decoration/>
                        <button>Fundacjom</button>
                        <button>Organizacjom pozarządowym</button>
                        <button>Lokalnym zbiórkom</button>
                        <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagamy i czego potrzebują.</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default HelpInfoSection;