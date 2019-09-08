import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
export default class Header extends React.Component {
    constructor(props) {
        super(props);
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
        </Navbar>
        );
    }
}

Header.propTypes = {
};
