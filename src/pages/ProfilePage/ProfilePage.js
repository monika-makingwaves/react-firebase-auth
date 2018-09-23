import React, {Component} from 'react';
import withAuthorization from "../../components/withAuthorization/withAuthorization";
import { compose } from 'compose-react';
import { connect } from 'react-redux';
import {Card, CardBody, CardLink, CardSubtitle, CardTitle} from "reactstrap";
import ChangePasswordLink from "../../components/ChangePasswordLink/ChangePasswordLink";

class ProfilePage extends Component {
  render() {
    const {user} = this.props;
    return (
      <div>
        {user && <Card>
          <CardBody>
            <CardTitle>Profile Page</CardTitle>
            <CardSubtitle>{user.email}</CardSubtitle>
            <small>{user.authDomain}</small>
            <CardLink>
              <ChangePasswordLink />
            </CardLink>
          </CardBody>
        </Card>}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

export default compose(
  withAuthorization,
  connect(mapStateToProps)
)(ProfilePage);