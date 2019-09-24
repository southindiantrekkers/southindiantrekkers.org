import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Card, Button, Col, Row, Container } from 'react-bootstrap';
import GalleryContainer from '../containers/GalleryContainer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.renderActivitiesCards = this.renderActivitiesCards.bind(this);
  }

  renderActivitiesCards(activities) {
    return <Row>{_.map(activities, (x, i) => <Col key={i} sm={4}>
      <Card>
        <Card.Img alt={x.title} variant="top" src={x.image.thumbnail}/>
        <Card.Body>
          <Card.Title className="card-title">{x.title}</Card.Title>
          <small className="mb-3">{x.image.date}</small>
          <Card.Text className="card-description">
            {x.brief}
          </Card.Text>
          <Button variant="primary" onClick={() => this.props.openGallery({ id: i, openGallery: true })}>View
            Images</Button>
        </Card.Body>
      </Card>
    </Col>)}</Row>;
  }

  render() {
    return (<Container>
      {this.renderActivitiesCards(this.props.activities)}
      <GalleryContainer/>
    </Container>
    );
  }
}

App.propTypes = {
  activities: PropTypes.array,
  openGallery: PropTypes.func,
};
