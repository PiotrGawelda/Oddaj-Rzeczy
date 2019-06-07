import React, { Component } from 'react';
import '../../scss/components style/footer-style.scss';
// import FooterImage from './../../images/footer_bg_img.jpg';

class Footer extends Component {
    render() {
        return(
            <div className="footer">
                <div className="container contact-block-position">
                    <div className="contact-block">
                        <h3>Skontaktuj się z nami</h3>
                        <img src="../.././images/decoration.png" alt="Black frame"/>
                        <div className="footer-form">
                            <p>FORMULARZ KONTAKTOWY</p>
                            <input type="text" name="footer-form" placeholder="Imie"/>
                            <input type="text" name="footer-form" placeholder="Email"/>
                            <input type="text" name="footer-form" placeholder="Wiadomość"/>
                            <button name="footer-form">Wyślij</button>
                        </div>
                    </div>
                </div>
                <footer className="footer-signature">
                    <p>Copyright 2019 <sup> &copy; </sup> by Piotr Gawełda </p>
                </footer>
            </div>
        )
    }
}

export default Footer;