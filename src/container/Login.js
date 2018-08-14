import React, { Component } from 'react';
import { Form, Button, Col, Grid } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { authenticate } from '../actions/authActions';
import TextFieldGroup from '../components/common/formFields';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.authenticate(this.state)) {
      this.props.history.push('/user_profile')
    } else {
      window.alert("Sorry, something went wrong. Please try logging in again.")
    }
  }

  render() {
    return (
      <div className="container">
      <Grid>
        <Col md={4}></Col>
        <Col md={4} className="formContainer">
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
              <Button bsStyle="link">Forgot Password?</Button>
              <Button type="submit" value="Login" bsStyle="primary">Log In</Button>
           </div>
           <div className="alternativeAccess">
             <p>New to SelfCare? <a href="/signup">Sign Up</a></p>
           </div>
          </Form>
        </Col>
        <Col md={4}></Col>
        </Grid>
      </div>
    )
  }
}

export default Login = withRouter(connect(null, {authenticate})(Login));
