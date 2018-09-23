import React, { Component } from 'react';
import {Card, CardHeader, CardBody, Form, CardFooter, Button, FormGroup, Label, Input} from 'reactstrap';
import { compose } from 'compose-react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {loginRequest} from "../../state/auth/auth.actions";
import * as routs from '../../config/routes';

const INITIAL_STATE = {
  email: '',
  password: ''
};

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;
  }

  componentDidUpdate(prevProps) {
    if(this.props.user) {
      this.setState(INITIAL_STATE);
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.loginRequest({
      email,
      password,
      callback: () => this.props.history.push(routs.HOME)
    })

  };

  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { email, password } = this.state;
    const { error } = this.props;

    return (
      <div style={{maxWidth: '500px'}}>
        <Form onSubmit={this.onSubmit}>
          <Card>
            <CardHeader>Login</CardHeader>
            {error && <p className={'alert alert-danger'}>{error}</p>}
            <CardBody>
              <FormGroup>
                <Label for={'loginEmail'}>Email:</Label>
                <Input type={'email'}
                       name={'email'}
                       id={'loginEmail'}
                       placeholder={'example@email.com'}
                       value={email}
                       onChange={this.onInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label fro={'loginPassword'}>Password:</Label>
                <Input type={'password'}
                       name={'password'}
                       id={'loginPassword'}
                       placeholder={'You password'}
                       value={password}
                       onChange={this.onInputChange}
                />
              </FormGroup>
            </CardBody>
            <CardFooter className={'d-flex flex-row-reverse'}>
              <Button color={"primary"}
                      disabled={email === '' || password === ''}
                      type={'submit'}
              >Log in</Button>
            </CardFooter>
          </Card>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  loginRequest: loginRequest
}

const mapStateToProps = (state) => ({
  error: state.auth.error,
  user: state.auth.user
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Login);