import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from '../components/App';

import { openGallery } from '../actions';

const mapStateToProps = state => ({
  activities: state.southindia.activities,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      openGallery
    },
    dispatch
  );

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
