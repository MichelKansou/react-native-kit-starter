import React from 'react';
import { connect } from 'react-redux';

import Home from './Home';
import { actions } from '../../redux/Account';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { logout, connected } = this.props;
    return (
        <Home logout={logout} connected={connected}/>
    );
  }
}

HomeContainer.propTypes = {
    logout: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        user: state.account.get('user'),
        connected: state.account.get('connected'),
        loading: state.account.get('loading')
    };
};

const mapDispatchToProps = {
    logout: () => actions.logout()
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
