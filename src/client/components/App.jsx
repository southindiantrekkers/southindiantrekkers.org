import React from 'react';
import PropTypes from 'prop-types';
import Img from 'react-image'
import _ from 'lodash'
import '../styles/App.scss';
import Gallery from './LightGallery';
import { Row, Col, Label, Container } from 'react-bootstrap'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.renderActivities = this.renderActivities.bind(this);
    this.renderGallery = this.renderGallery.bind(this);
    this.state = { openGallery: false, id: 0 }
  }
  renderGallery(state) {
    const images = _.get(this.props, `activities.${state.id}.timeline`, []);

    return <Gallery images={_.map(images, (image)=>image.photo)} open={state.openGallery} toggleGallery={() => {
      this.setState({ openGallery: false });
    }} />;
  }
  renderActivities(activities) {
    return <Container>{_.map(activities, (x, i) => {
      return <Row className="show-grid">
        <Col>
          <div>{x.title}  <small>{x.image.date}</small></div>
          <Img className="still" key={i} src={x.image.photo} onClick={() => this.setState({ id: i, openGallery: true })} />
        </Col>
      </Row>
    })}</Container>;
  }
  render() {
    return (<div className="container-fluid">
      {this.renderActivities(this.props.activities)}
      {this.renderGallery(this.state)}
    </div>
    );
  }
}

App.propTypes = {
  activities: PropTypes.array,
};
