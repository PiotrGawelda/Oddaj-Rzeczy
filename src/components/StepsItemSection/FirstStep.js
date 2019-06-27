import React, {Component} from "react";

class FirstStep extends Component{

    constructor(props){
        super(props);
        this.state = {
            renewClothes: "",
            throwClothes: "",
            toys: "",
            books: "",
            other: "",
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
                <p>Krok 1/4</p>
                <h2>Zaznacz co chcesz oddać:</h2>
                <form className="steps-form" onSubmit={this.handleOnSubmit}>
                    <label>
                        <input type="checkbox" className="checkbox" onChange={this.handleOnChange("renewClothes")}/> ubrania, które nadają się do ponownego użycia
                    </label>
                    <label>
                        <input type="checkbox" onChange={this.handleOnChange("throwClothes")}/> ubrania, do wyrzucenia
                    </label>
                    <label>
                        <input type="checkbox" onChange={this.handleOnChange("toys")}/> zabawki
                    </label>
                    <label>
                        <input type="checkbox" onChange={this.handleOnChange("books")}/> książki
                    </label>
                    <label>
                        <input type="checkbox" onChange={this.handleOnChange("other")}/> inne
                    </label>
                    <label>
                        <input type="submit" value="Dalej" id="steps-btn" />
                    </label>
                </form>
            </div>
        )
    }
}

export default FirstStep;