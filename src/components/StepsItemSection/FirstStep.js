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
            dupa: ""
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
                <p>Krok 1/4</p>
                <h2>Zaznacz co chcesz oddać:</h2>
                <form className="steps-form" onSubmit={this.handleOnSubmit}>
                    <label>
                        <input type="checkbox" className="checkbox" onChange={this.handleOnChange("renewClothes")}/> ubrania, które nadają się do ponownego użycia
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
                        <input type="submit" value="Dalej" id="steps-btn" />
                    </label>
                    <label>
                        <input type="text" onChange={this.handleOnChange("dupa")}/>
                    </label>
                </form>
            </div>
        )
    }
}

export default FirstStep;