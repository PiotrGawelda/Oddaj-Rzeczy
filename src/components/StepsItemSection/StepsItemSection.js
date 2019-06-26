import React, {Component} from "react";
import LoggedInImage from "../../images/loggin-in.png";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";

class StepsItemSection extends Component{
    state = {
        step: 1,
        renewClothes: "",
        throwClothes: "",
        toys: "",
        books: "",
        other: ""
    };

    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step +1
        })
    };

    handleOnSave = (data) =>{
        this.setState(
            prevState => ({inputs: {...data, ...prevState.inputs}})
        )
    };

    render() {
        console.log(this.state);
        const {step} = this.state;
        const {renewClothes, throwClothes, toys, books, other} = this.state;
        return(
            <section className="steps-item-section" style={{backgroundImage: `url(${LoggedInImage})`}}>
                <FirstStep onSave = {this.handleOnSave}/>
                {/*<SecondStep onSave = {this.handleOnSave}/>*/}
            </section>
        )
    }
}

export default StepsItemSection;