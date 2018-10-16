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
      window.alert("Thank you for signing up.")
    } else {
      window.alert("We're having issues creating your account.")
    }
  }

  render() {
    return (
      <main>
        <Form onSubmit={this.handleSubmit}>
          <h1 className="page-title">Sign Up</h1>
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
           <Button bsStyle="link">Forgot Password?</Button>
           <Button type="submit" value="Sign Up" bsStyle="primary">Sign Up</Button>
         </div>
         <div className="alternativeAccess">
           <p>Already have an Account? <a href="/login">Log In</a></p>
         </div>
        </Form>
      </main>
    )
  }
}

export default Signup = withRouter(connect(null, {signup})(Signup));
