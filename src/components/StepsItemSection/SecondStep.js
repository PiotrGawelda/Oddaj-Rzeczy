import React, {Component} from "react";

class SecondStep extends Component {

    constructor(props){
        super(props);
        this.state = {
            worki: 0
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
                <p>Krok 2/4</p>
                <h2 id="sec-step-h2">Podaj liczbę 60 l worków, w które spokowałeś/aś rzeczy:</h2>
                <form className="steps-form" onSubmit={this.handleOnSubmit}>
                    <label>
                        Liczba 60 l worków
                        <select onChange={this.handleOnChange("worki")}>
                              <option>
                                  - wybierz -
                              </option>
                              <option value={1}>
                                1 worek
                              </option>
                            <option value={2}>
                                2 worki
                            </option>
                            <option value={3}>
                                3 worki
                            </option>
                          </select>
                    </label>
                    <label>
                        <input type="submit" value="Wstecz" className="btn-position steps-btn"/>
                        <input type="submit" value="Dalej" className="btn-position steps-btn"/>
                    </label>
                </form>
            </div>

        )
    }
}

export default SecondStep;