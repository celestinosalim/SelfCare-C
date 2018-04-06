import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import TextFieldGroup from '../components/common/formFields';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      error: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    return this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();

  }

  render() {
    return (
      <div className="bodyContainer">
        <Col md={4}></Col>
        <Col md={4}>
          <div className="formContainer">
            <h1>Login</h1>
            <Form onSubmit={this.handleSubmit}>
              <TextFieldGroup
                label="Email"
                id="formControlsEmail"
                type="text"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <TextFieldGroup
                label="Password"
                id="formControlsPassword"
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
              />
             <div className="submissionFields">
               <Button type="submit" value="Login">Log In</Button>
               <Button bsStyle="link">Forgot Password?</Button>
             </div>
             <div className="alternativeAccess">
               <hr></hr>
               <p>New to SelfCare?</p>
               <Button href="/signup" bsStyle="primary" bsSize="large" block>Sign Up</Button>
               <Button href="#" bsSize="large" block>Login with FB</Button>
             </div>
            </Form>
          </div>
        </Col>
        <Col md={4}></Col>
      </div>
    )
  }
}

export default Login;
