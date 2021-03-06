import React from 'react';
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
                onClose={this.props.closeGallery} />
    }
}

Gallery.propTypes = {
    images: PropTypes.array,
    open: PropTypes.bool,
    closeGallery: PropTypes.func,
};
