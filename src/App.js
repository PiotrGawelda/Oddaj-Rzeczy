import React from 'react';
import './scss/App.scss';
import Header from "./components/Header";
import BannerSection from "./components/BannerSection";
import TipsSection from "./components/TipsSection";
import AboutUsSection from "./components/AboutUsSection";
import HelpInfoSection from "./components/HelpInfoSection";
import Footer from "./components/Footer";
import "./images/header_start_img.jpg";

// import * as Scroll from 'react-scroll';

function App() {
    return (
        <>
            <Header/>
            <BannerSection/>
            <TipsSection/>
            <AboutUsSection/>
            <HelpInfoSection/>
            <Footer/>
        </>
    );
}

export default App;