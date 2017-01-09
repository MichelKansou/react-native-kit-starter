import React from 'react';
import { connect } from 'react-redux';

import Auth from './Auth';
import { actions } from '../../redux/Account';


class AuthContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { connected, login } = this.props;
    return (
      <Auth connected={connected} login={login}/>
    );
  }
}

AuthContainer.propTypes = {
    login: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        user: state.account.get('user'),
        connected: state.account.get('connected'),
        loading: state.account.get('loading')
    };
};

const mapDispatchToProps = {
    login: () => actions.login()
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
