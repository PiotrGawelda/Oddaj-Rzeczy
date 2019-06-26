import React, {Component} from "react";

class SecondStep extends Component {

    constructor(props){
        super(props);
        this.state = {
            worki: 0
        }
    }

    handleOnChange = (name) => (event) => {
        console.log(event.target.checked);
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
                <h2>Podaj liczbę 60 l worków, w które spokowałeś/aś rzeczy:</h2>
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
                          </select>
                    </label>
                    <label>
                        <input type="submit" value="Wstecz"/>
                    </label>
                    <label>
                        <input type="submit" value="Dalej"/>
                    </label>
                </form>
            </div>

        )
    }
}

export default SecondStep;