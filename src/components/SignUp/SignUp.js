import React, { Component } from 'react';
import {Card, CardHeader, CardBody, Form, CardFooter, Button, FormGroup, Label, Input} from 'reactstrap';
import {connect} from 'react-redux';
import {signupRequest} from "../../state/auth/auth.actions";
import * as route from '../../config/routes';
import { compose } from 'compose-react';
import {withRouter} from "react-router-dom";

const INITIAL_STATE = {
  email: '',
  password: '',
  confirmPassword: ''
};

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;
  }

  componentDidUpdate(prevProps) {
    if(this.props.token) {
      this.setState(INITIAL_STATE);
    }
  }

  onSignInSuccessCallback = () => {
    this.props.history.push(route.HOME);
  };

  onSubmit = (event) => {
    event.preventDefault();
    const {email, password} = this.state;
    this.props.signupRequest({
      email,
      password,
      callback: this.onSignInSuccessCallback
    });
  };

  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { email, password, confirmPassword } = this.state;
    const {error} = this.props;

    return (
      <div style={{maxWidth: '500px'}}>
        <Form onSubmit={this.onSubmit}>
          <Card>
            <CardHeader>Create account</CardHeader>
            <CardBody>
              {error && <p className={'alert alert-danger'}>{error}</p>}
              <FormGroup>
                <Label for={'accountEmail'}>Email:</Label>
                <Input type={'email'}
                       name={'email'}
                       id={'accountEmail'}
                       value={email}
                       onChange={this.onInputChange}
                       placeholder={'example@email'}
                       />
              </FormGroup>
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
            <CardFooter className={'d-flex flex-row-reverse'}>
              <Button color="primary"
                      disabled={email === '' || password === '' || confirmPassword === '' || password !== confirmPassword }
                      type={'submit'}>Create account</Button>
            </CardFooter>
          </Card>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  signupRequest: signupRequest
};

const mapStateToProps = (state) => ({
  token: state.auth.token,
  error: state.auth.error
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(SignUp);