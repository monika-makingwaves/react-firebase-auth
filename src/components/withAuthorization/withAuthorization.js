import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'compose-react';
import { withRouter } from 'react-router-dom';

const withAuthorization = ChildComponent => {
  class WithAuthorization extends Component {

    // Our component just got rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }
    // Our component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }
    shouldNavigateAway() {
      if (!this.props.user) {
        this.props.history.push('/');
      }
    }

    render() {
      return <ChildComponent {...this.props} />
    }
  }

  const mapStateToProps = state => {
    return {
      user: state.auth.user
    }
  };

  return compose(
    withRouter,
    connect(mapStateToProps)
  )(WithAuthorization);
};

export default withAuthorization;