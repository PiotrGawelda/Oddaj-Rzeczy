import React, {Component} from 'react';
import './scss/App.scss';
import Header from "./components/Header";
import BannerSection from "./components/BannerSection";
import TipsSection from "./components/TipsSection";
import AboutUsSection from "./components/AboutUsSection";
import HelpInfoSection from "./components/HelpInfoSection";
import Footer from "./components/Footer";
import LoginSection from "./components/Login/LoginSection";
import RegisterSection from "./components/Login/RegisterSection";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


class Main extends Component{
    render(){
        return(
            <>
                <Header/>
                <BannerSection/>
                <TipsSection/>
                <AboutUsSection/>
                <HelpInfoSection/>
                <Footer/>
            </>
        )
    }

}

class Error extends Component {
    render(){
        return(
            <h1>Not found</h1>
        )
    }
}

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route path="/LoginSection" component={LoginSection}/>
                    <Route path="/RegisterSection" component={RegisterSection}/>
                    <Route component={Error}/>
                </Switch>
            </Router>
        </>
    );
}

export default App;