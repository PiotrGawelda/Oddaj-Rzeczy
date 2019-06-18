import React from "react";
import {Component} from "react";
import Slider from "react-slick";

class SectionSlider extends Component{
    render(){
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true
        };
        return(
            <div className="slider">
                <Slider {...settings}>
                     <div>
                        <div className="left-side-slider">
                            <div>
                                <h5>Fundacja "Dbam o Zdrowie"</h5>
                                <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                            </div>
                            <div>
                                <h5>Fundacja "Dla Dzieci</h5>
                                <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                            </div>
                            <div>
                                <h5>Fundacja "Bez Domu"</h5>
                                <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania</p>
                            </div>
                        </div>
                        <div className="right-side-slider">
                            <div>
                                <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                            </div>
                            <div>
                                <p>ubrania, meble, zabawki</p>
                            </div>
                            <div>
                                <p>ubrania, jedzenie, ciepłe koce</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="left-side-slider">
                            <div>
                                <h5>Fundacja "Dbam o Zdrowie"</h5>
                                <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                            </div>
                            <div>
                                <h5>Fundacja "Dla Dzieci</h5>
                                <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                            </div>
                            <div>
                                <h5>Fundacja "Bez Domu"</h5>
                                <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania</p>
                            </div>
                        </div>
                        <div className="right-side-slider">
                            <div>
                                <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                            </div>
                            <div>
                                <p>ubrania, meble, zabawki</p>
                            </div>
                            <div>
                                <p>ubrania, jedzenie, ciepłe koce</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="left-side-slider">
                            <div>
                                <h5>Fundacja "Dbam o Zdrowie"</h5>
                                <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                            </div>
                            <div>
                                <h5>Fundacja "Dla Dzieci</h5>
                                <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                            </div>
                            <div>
                                <h5>Fundacja "Bez Domu"</h5>
                                <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania</p>
                            </div>
                        </div>
                        <div className="right-side-slider">
                            <div>
                                <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                            </div>
                            <div>
                                <p>ubrania, meble, zabawki</p>
                            </div>
                            <div>
                                <p>ubrania, jedzenie, ciepłe koce</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        )
    }
}

export default SectionSlider;