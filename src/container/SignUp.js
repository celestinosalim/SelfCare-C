import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signup } from '../actions/authActions';
import TextFieldGroup from '../components/common/formFields';

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
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
    if (this.props.signup(this.state)) {
      this.props.history.push('/user_profile')
    } else {
      window.alert("Sorry, something went wrong. Please try signing up again.")
    }
  }

  render() {
    return (
      <div className="container">
        <Col md={4}></Col>
        <Col md={4}>
          <div className="formContainer">
            <h1>Sign Up</h1>
            <Form onSubmit={this.handleSubmit}>
              <TextFieldGroup
                label="Name"
                id="formControlsName"
                type="text"
                name="name"
                placeholder="Name"
                value={this.state.name}
                onChange={this.handleChange}
              />
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
               <Button type="submit" value="Sign Up">Sign Up</Button>
               <Button bsStyle="link">Forgot Password?</Button>
             </div>
             <div className="alternativeAccess">
               <hr></hr>
               <p>Already have an Account?</p>
               <Button href="/login" bsStyle="primary" bsSize="large" block>Log In</Button>
               <Button href="#" bsSize="large" block>Sign Up with FB</Button>
             </div>
            </Form>
          </div>
        </Col>
        <Col md={4}></Col>
      </div>
    )
  }
}

export default Signup = withRouter(connect(null, {signup})(Signup));
