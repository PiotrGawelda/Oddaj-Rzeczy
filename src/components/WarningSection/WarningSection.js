import React, {Component} from "react";

class WarningSection extends Component {
    render() {

        const warningStyle = {
            height: '150px',
            backgroundColor: 'gold',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexDirection: 'column',
            paddingLeft: '150px',
            fontWeight: 'bold'
        };

        return(
            <section style={warningStyle}>
                <h2>Ważne!</h2>
                <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać</p>
            </section>
        )
    }
}

export default WarningSection;