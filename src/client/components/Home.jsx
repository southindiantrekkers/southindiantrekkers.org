import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from './Header';
import AppContainer from '../containers/AppContainer';
import Footer from './Footer';
import SearchContainer from '../containers/SearchContainer';
export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Header/>
                <SearchContainer/>
                <AppContainer/>
                <Footer/>
            </Container>
        );
    }
}

Home.propTypes = {
};
