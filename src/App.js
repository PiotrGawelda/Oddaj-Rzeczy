import React from 'react';
import './App.scss';
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import * as Scroll from 'react-scroll';


function App() {
    return (
        <>
            <Header/>
            <Section/>
            <Footer/>
        </>
    );
}

export default App;