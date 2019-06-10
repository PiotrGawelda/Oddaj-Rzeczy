import React, { Component } from 'react';
import '../../scss/components style/footer-style.scss';
import Decoration from "../Decoration";
import FooterImg from './../../images/footer_bg_img.jpg';

class Footer extends Component {
    render() {
        return(
            <div className="footer" style={{backgroundImage: `url(${FooterImg})`}}>
                <div className="container contact-block-position">
                    <div className="contact-block">
                        <h3>Skontaktuj się z nami</h3>
                        <Decoration/>
                        <div className="footer-form">
                            <p>FORMULARZ KONTAKTOWY</p>
                            <input type="text" name="footer-form" placeholder="Imie"/>
                            <input type="text" name="footer-form" placeholder="Email"/>
                            <input type="text" name="footer-form" placeholder="Wiadomość"/>
                            <div className="form-button">
                                <button name="footer-form">Wyślij</button>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer-signature">
                    <p>Copyright 2019 <sup> &copy; </sup> by Piotr Gawełda </p>
                    <div className="media-icons">
                        <i className="fab fa-facebook-f "></i>
                        <i className="fab fa-instagram"></i>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;