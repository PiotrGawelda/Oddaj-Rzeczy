import React, {Component} from "react";

class ThirdStep_Sec extends Component{
    render() {
        return(
            <div className="steps-item-block">
                <p>Krok 3/4</p>
                <h2>Wybierz organizację, której chcesz pomóc: </h2>
                <form className="steps-form">
                    <div className="third-step-sec">
                        <input type="checkbox" name="fundation-check"/>
                        <h5>Fundacja "Dbam o Zdrowie"</h5>
                        <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania</p>
                    </div>
                    <div className="btn-optional">
                        <input type="submit" value="Wstecz" className="btn-position steps-btn" />
                        <input type="submit" value="Dalej"  className="btn-position steps-btn"  />
                    </div>
                </form>
            </div>
        )
    }
}

export default ThirdStep_Sec;