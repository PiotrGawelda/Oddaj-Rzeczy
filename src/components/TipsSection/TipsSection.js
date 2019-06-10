import React, { Component } from 'react';
import '../../scss/components style/tips-section-style.scss';
import Decoration from "../Decoration";

class TipsSection extends Component {
    render() {
        return(
            <section className="container">
                <div className="tips-section">
                    <div className="tips-text">
                        <h2>Wystarczą 4 proste kroki</h2>
                        <Decoration/>
                    </div>
                    <div className="tips-images">
                        <div className="tips-blocks">
                            <div>
                                <i className="fas fa-praying-hands fa-4x"></i>
                                <p>Wybierz rzeczy</p>
                                <p>ubrania, zabawki. sprzęt i inne</p>
                            </div>
                        </div>
                        <div className="tips-blocks">
                            <div>
                                <i className="fas fa-arrow-down fa-4x"></i>
                                <p>Spakuj je</p>
                                <p>skorzystaj z worków na śmieci</p>
                            </div>
                        </div>
                        <div className="tips-blocks">
                            <div>
                                <i className="fas fa-binoculars fa-3x ocular-position"></i>
                                <p>Zdecuduj komu chcesz pomóc</p>
                                <p>wybierz zaufane miejsce</p>
                            </div>
                        </div>
                        <div className="tips-blocks">
                            <div>
                                <i className="fas fa-users fa-4x"></i>
                                <p>Zamów kuriera</p>
                                <p>kurier przyjedzie w dogodnym terminie</p>
                            </div>
                        </div>
                    </div>
                    <button className="tips-button">ZAŁÓŻ KONTO</button>
                </div>
            </section>
        )
    }
}

export default TipsSection;