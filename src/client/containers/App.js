import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = state => ({
  activities: state.southindia.activities,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
    },
    dispatch
  );

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
