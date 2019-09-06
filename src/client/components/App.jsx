import React from 'react';
import PropTypes from 'prop-types';
import Img from 'react-image'
import _ from 'lodash'
import '../styles/App.scss';
import Gallery from './Gallery';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.renderActivities = this.renderActivities.bind(this);
    this.renderGallery = this.renderGallery.bind(this);
    this.state = { openGallery: false, id: 0 }
  }
  renderGallery(state) {
    const images = _.get(this.props, `activities.${state.id}.timeline`, []);
    return <Gallery images={images} open={state.openGallery} toggleGallery={() => {
      this.setState({ openGallery: false });
    }} />;
  }
  renderActivities(activities) {
    return _.map(activities, (x, i) => {
      return <Img className="still" key={i} src={x.image.photo} onClick={() => this.setState({ id: i, openGallery: true })} />;
    });
  }
  render() {
    return (<div className="container">
      {this.renderActivities(this.props.activities)}
      {this.renderGallery(this.state)}
    </div>
    );
  }
}

App.propTypes = {
  activities: PropTypes.array,
};
