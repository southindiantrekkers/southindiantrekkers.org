import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Search from '../components/Search';
import { searchActivities } from '../actions';
import _ from 'lodash';
const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            searchActivities
        },
        dispatch
    );

const SearchContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);

export default SearchContainer;
