import React, { Component } from 'react';
import {Button, Card, CardBody, CardFooter, CardHeader, Form, FormGroup, Input, Label} from "reactstrap";
import { connect } from 'react-redux';
import {passwordForgetRequest} from "../../state/auth/auth.actions";

const INITIAL_STATE = {
  email: ''
};

class PasswordForgetPage extends Component {
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

    const { email } = this.state;
    this.props.passwordForgetRequest({email});
    this.setState(INITIAL_STATE);
  };

  render() {
    const { email } = this.state;
    const { error, message } = this.props;

    return (
      <div className={'m-3'}>
        <div style={{maxWidth: '500px'}}>
          <Form onSubmit={this.onSubmit}>
            {error && <p className={'alert alert-danger'}>{error}</p>}
            {message && <p className={'alert alert-success'}>{message}</p>}
            <Card>
              <CardHeader>Password Forget</CardHeader>
              <CardBody>
                {error && <p className={'alert alert-danger'}>{error}</p>}
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
              </CardBody>
              <CardFooter className={'d-flex flex-row-reverse'}>
                <Button color={"primary"}
                        disabled={email === ''}
                        type={'submit'}
                >Log in</Button>
              </CardFooter>
            </Card>
          </Form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  passwordForgetRequest: passwordForgetRequest
};

const mapStateToProps = state => {
  return {
    message: state.auth.message,
    error: state.auth.error
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PasswordForgetPage);