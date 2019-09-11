import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Form, Button, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import _ from 'lodash';
export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.renderLoginButton = this.renderLoginButton.bind(this);
        this.renderProfile = this.renderProfile.bind(this);
    }
    renderLoginButton() {
        return <Form inline>
            <Button variant="outline-success" onClick={() => {
                window.location = `/auth/google`;
            }}>Login</Button>
        </Form>;
    }
    renderProfile() {
        return <Image className="profile" src={_.get(this.props, 'profile.user._json.picture', '')} thumbnail />;
    }
    render() {
        return (<Navbar bg="white">
            <Navbar.Brand href="#">
                <img
                    alt=""
                    src="https://avatars3.githubusercontent.com/u/52498827?s=400&u=72e0c5865684cca1aa49714cda73875e219142aa&v=4"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                {'South Indian Trekkers Club'}
            </Navbar.Brand>
            {/* {_.get(this.props.profile, 'isAuthenticated', false) ? this.renderProfile() : this.renderLoginButton()} */}
        </Navbar>
        );
    }
}

Header.propTypes = {
    profile: PropTypes.object,
};
