import React from 'react';
import Container from 'react-bootstrap/Container';
import AppContainer from '../containers/AppContainer';
import Footer from './Footer';
import SearchContainer from '../containers/SearchContainer';
import HeaderContianer from '../containers/Header';
export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <HeaderContianer/>
        <SearchContainer />
        <AppContainer />
        <Footer />
      </div>
    );
  }
}
