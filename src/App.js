import React from 'react';
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



function App() {
    return (
        <>
            <Header/>
            <BannerSection/>
            <TipsSection/>
            <AboutUsSection/>
            <HelpInfoSection/>
            <Footer/>
            <Router>
                <Switch>
                    <Route path="/LoginSection" component={LoginSection}/>
                    <Route path="/RegisterSection" component={RegisterSection}/>
                </Switch>
            </Router>
        </>
    );
}

export default App;