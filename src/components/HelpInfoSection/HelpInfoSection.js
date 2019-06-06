import React, { Component } from 'react';
import '../../scss/components style/help-info-section-style.scss';

class HelpInfoSection extends Component {
    render() {
        return(
            <section className="help-info-section">
                <div className="container">
                    <div className="">
                        <h2>Komu pomagamy?</h2>
                        <img src="../.././images/decoration.png" alt="Black frame"/>
                        <div className="help-us-blocks">Fundacjom</div>
                        <div className="help-us-blocks">Organizacjom pozarządowym</div>
                        <div className="help-us-blocks">Lokalnym zbiórkom</div>
                        <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagamy i czego potrzebują.</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default HelpInfoSection;