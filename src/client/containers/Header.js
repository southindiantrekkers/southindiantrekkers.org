import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';


const mapStateToProps = state => ({
  profile: state.user.profile,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
    },
    dispatch
  );

const HeaderContianer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContianer;
