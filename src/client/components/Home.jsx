import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from './Header';
import AppContainer from '../containers/App';
import Footer from './Footer';
export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Header/>
                <AppContainer/>
                <Footer/>
            </Container>
        );
    }
}

Home.propTypes = {
};
