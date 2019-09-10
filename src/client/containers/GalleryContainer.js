import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Gallery from '../components/LightGallery';
import { closeGallery } from '../actions';
import _ from 'lodash';
const mapStateToProps = state => ({
    images: _.get(state, 'southindia.gallery.images', []),
    open: _.get(state, 'southindia.gallery.open', false),
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            closeGallery
        },
        dispatch
    );

const GalleryContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Gallery);

export default GalleryContainer;
