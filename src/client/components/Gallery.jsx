import React from 'react';
import '../styles/App.scss';
import PropTypes from 'prop-types';
import ReactBnbGallery from 'react-bnb-gallery';
export default class Gallery extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <ReactBnbGallery
                show= {this.props.open}
                photos={this.props.images}
                onClose={this.props.toggleGallery} />
    }
}

Gallery.propTypes = {
    images: PropTypes.array,
    open: PropTypes.bool,
    toggleGallery: PropTypes.func,
};
