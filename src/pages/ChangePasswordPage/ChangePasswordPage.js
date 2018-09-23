import React, { Component } from 'react';
import {Button, Card, CardBody, CardFooter, CardHeader, Form, FormGroup, Input, Label} from "reactstrap";
import {connect} from 'react-redux';
import {passwordChangeRequest} from "../../state/auth/auth.actions";
import { compose } from 'compose-react';
import withAuthorization from "../../components/withAuthorization/withAuthorization";

const INITIAL_STATE = {
  password: '',
  confirmPassword: ''
};

class ChangePasswordPage extends Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;
  }

  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const {password} = this.state;
    this.props.passwordChangeRequest({
      password
    });
    this.setState(INITIAL_STATE);
  };

  render() {
    const { password, confirmPassword } = this.state;
    const { error, message } = this.props;
    return (
      <div style={{maxWidth: '500px'}}>
        <Form onSubmit={this.onSubmit}>
          {error && <p className={'alert alert-danger'}>{error}</p>}
          {message && <p className={'alert alert-success'}>{message}</p>}
          <Card>
            <CardHeader>Change Password</CardHeader>
            <CardBody>
              <FormGroup>
                <Label for={'accountPassword'}>Password:</Label>
                <Input type={'password'}
                       name={'password'}
                       id={'accountPassword'}
                       value={password}
                       onChange={this.onInputChange}
                       placeholder={'Your password'}
                />
              </FormGroup>
              <FormGroup>
                <Label for={'accountConfirmPassword'}>Confirm password:</Label>
                <Input type={'password'}
                       name={'confirmPassword'}
                       id={'accountConfirmPassword'}
                       value={confirmPassword}
                       onChange={this.onInputChange}
                       placeholder={'Confirm password'} />
              </FormGroup>
            </CardBody>
            <CardFooter>
              <Button color="primary"
                      disabled={password === '' || confirmPassword === '' || password !== confirmPassword }
                      type={'submit'}>Create account</Button>
            </CardFooter>
          </Card>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  passwordChangeRequest: passwordChangeRequest
};

const mapsStateToProps = state => {
  return {
    error: state.auth.error,
    message: state.auth.message
  };
};

export default compose(
  withAuthorization,
  connect(mapsStateToProps, mapDispatchToProps)
)(ChangePasswordPage);