import React from "react";
import {Modal, ModalDialog, ModalHeader, ModalTitle, ModalBody, ModalFooter, Button} from "react-bootstrap";
import Decoration from "./Decoration";
import '../scss/components style/login.scss';

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        return (
            <>
                <Button variant="light" onClick={this.handleShow}>
                    Zaloguj
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Załóż konto <br></br>
                            <Decoration/>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input type="text" name="login-form" placeholder="Email"/><br></br><br></br>
                        <input type="text" name="login-form" placeholder="Hasło"/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Załóż konto
                        </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Zaloguj
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default Login;