import React, {Component} from "react";

class StepsItemSection extends Component{
    render() {
        return(
            <section className="steps-item-section">
                <div className="steps-item-block">
                    <p>Krok 1/4</p>
                    <h2>Zaznacz co chcesz oddać:</h2>
                    <form className="steps-form">
                        <label>
                            <input type="checkbox" className="checkbox"/> ubrania, które nadają się do ponownego użycia
                        </label>
                        <label>
                            <input type="checkbox"/> ubrania, do wyrzucenia
                        </label>
                        <label>
                            <input type="checkbox"/> zabawki
                        </label>
                        <label>
                            <input type="checkbox"/> książki
                        </label>
                        <label>
                            <input type="checkbox"/> inne
                        </label>
                        <label>
                            <input type="submit" value="Dalej" id="steps-btn"/>
                        </label>
                    </form>
                </div>
            </section>
        )
    }
}

export default StepsItemSection;