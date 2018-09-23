import React, { Component } from 'react';
import {Button} from "reactstrap";
import { connect } from 'react-redux';
import {logout} from "../../state/auth/auth.actions";

class SignOut extends Component {
  render() {
    return (
      <Button onClick={() => this.props.logout()}>
        {this.props.children}
      </Button>
    );
  }
}

const mapDispatchToProps = {
  logout: logout
};

export default connect(null, mapDispatchToProps)(SignOut);