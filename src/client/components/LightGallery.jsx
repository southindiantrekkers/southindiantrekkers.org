import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import PropTypes from 'prop-types';

export default class LightGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photoIndex: 0,
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ photoIndex: 0 });
    }
    render() {
        const { photoIndex } = this.state;
        const { open, images } = this.props;
        console.log(this.props);
        return (
            <div>
                {open && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={this.props.toggleGallery}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )}
            </div>
        );
    }
}

LightGallery.propTypes = {
    images: PropTypes.array,
    open: PropTypes.bool,
    toggleGallery: PropTypes.func,
};