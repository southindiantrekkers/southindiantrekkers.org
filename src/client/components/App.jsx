import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash'
import { Card, Button } from 'react-bootstrap'
import GalleryContainer from '../containers/GalleryContainer'
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.renderActivitiesCards = this.renderActivitiesCards.bind(this);
  }
  renderActivitiesCards(activities) {
    return _.map(activities, (x, i) => {
      return <Card key={i} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={x.image.thumbnail} />
        <Card.Body>
          <Card.Title>{x.title}  <small>{x.image.date}</small> </Card.Title>
          <Card.Text>

          </Card.Text>
          <Button variant="primary" onClick={() => this.props.openGallery({ id: i, openGallery: true })}>View Images</Button>
        </Card.Body>
      </Card>;
    });
  }
  render() {
    return (<div className="container-fluid">
      {this.renderActivitiesCards(this.props.activities)}
      <GalleryContainer />
    </div>
    );
  }
}

App.propTypes = {
  activities: PropTypes.array,
  openGallery: PropTypes.func,
};
