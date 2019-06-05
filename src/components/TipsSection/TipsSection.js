import React, { Component } from 'react';
import '../../scss/components style/tips-section-style.scss';

class TipsSection extends Component {
    render() {
        return(
            <section className="container">
                <div className="tips-section">
                    <div className="tips-text">
                        <h2>Wystarczą 4 proste kroki</h2>
                        <img src="../.././images/decoration.png" alt="Black frame"/>
                    </div>
                    <div className="tips-images">
                        <div className="">
                            <i className="fas fa-arrow-down"></i>
                            <p>ubrania, zabawki. sprzęt i inne</p>
                        </div>
                        <div className="">
                            <p>skorzystaj z worków na śmieci</p>
                        </div>
                        <div className="">
                            <p>wybierz zaufane miejsce</p>
                        </div>
                        <div className="">
                            <p>kurier przyjedzie w dogodnym terminie</p>
                        </div>
                    </div>
                    <button className="tips-button">ZAŁÓŻ KONTO</button>
                </div>
            </section>
        )
    }
}

export default TipsSection;