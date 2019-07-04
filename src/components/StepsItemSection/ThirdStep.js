import React, {Component} from "react";

class ThirdStep extends Component{

    constructor(props){
        super(props);
        this.state = {
            map: 0
        }
    }

    handleOnChange = (name) => (event) => {
        this.setState({
            [name]: event.target.value
        })
    };

    handleOnSubmit = (e) => {
        e.preventDefault();
        this.props.onSave({
            ...this.state
        })
    };

    render() {
        return(
            <div className="steps-item-block">
                <p>Krok 3/4</p>
                <h2>Lokalizacja</h2>
                <form className="steps-form">
                <select>
                    <option>
                        - wybierz -
                    </option>
                </select>
                <div className="btn-choice-block">
                    <h4> Komu chcesz pomóc?</h4>
                    <button className="btn-choice">dzieciom</button>
                    <button className="btn-choice">samotnym matkom</button>
                    <button className="btn-choice">bezdomnym</button>
                    <button className="btn-choice">niepełnosprawnym</button>
                    <button className="btn-choice">osobom starszym</button>
                </div>
                <div className="btn-optional">
                    <h4>Wpisz nazwę konkretnej organizacji (opcjonalne)</h4>
                    <input type="text" name="text-organisation"/>
                    <input type="submit" value="Wstecz" className="btn-position steps-btn" />
                    <input type="submit" value="Dalej"  className="btn-position steps-btn"  />
                </div>
                </form>
            </div>
        )
    }
}

export default ThirdStep;