import React, {Component} from "react";


class ThirdStep_Sec extends Component{

    div_brd = {
        borderTop: "1px solid black"
    };

    render() {
        return(
            <div className="steps-item-block">
                <p>Krok 3/4</p>
                <h2>Wybierz organizację, której chcesz pomóc: </h2>
                <form className="steps-form">
                    <div className="third-step-sec">
                        <input type="checkbox" name="fundation-check"/>
                        <div className="help-position">
                            <h3>Fundacja "Dbam o Zdrowie"</h3>
                            <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji zyciowej.</p>
                        </div>
                        <div className="help">
                            {/*<p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania</p>*/}
                        </div>
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