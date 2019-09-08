import React from 'react';
import PropTypes from 'prop-types';
import Img from 'react-image'
import _ from 'lodash'
import Gallery from './LightGallery';
import { Card, Button } from 'react-bootstrap'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.renderGallery = this.renderGallery.bind(this);
    this.state = { openGallery: false, id: 0 }
  }
  renderGallery(state) {
    const images = _.get(this.props, `activities.${state.id}.timeline`, []);

    return <Gallery images={_.map(images, (image) => image.photo)} open={state.openGallery} toggleGallery={() => {
      this.setState({ openGallery: false });
    }} />;
  }
  // renderActivities(activities) {
  //   return _.map(activities, (x, i) => {
  //     return <Row key={i} className="show-grid">
  //       <Col>
  //         <div>{x.title}  <small>{x.image.date}</small></div>
  //         <Img className="still" key={i} src={x.image.photo} onClick={() => this.setState({ id: i, openGallery: true })} />
  //       </Col>
  //     </Row>
  //   });
  // }
  renderActivitiesCards(activities) {
    return _.map(activities, (x, i) => {
      return <Card key={i} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={x.image.photo} />
        <Card.Body>
          <Card.Title>{x.title}  <small>{x.image.date}</small> </Card.Title>
          <Card.Text>

          </Card.Text>
          <Button variant="primary" onClick={() => this.setState({ id: i, openGallery: true })}>View Images</Button>
        </Card.Body>
      </Card>;
    });
  }
  render() {
    return (<div className="container-fluid">
      {this.renderActivitiesCards(this.props.activities)}
      {this.renderGallery(this.state)}
    </div>
    );
  }
}

App.propTypes = {
  activities: PropTypes.array,
};
