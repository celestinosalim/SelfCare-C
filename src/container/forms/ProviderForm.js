import React, { Component } from 'react';
import { Form, Button, FormGroup, Radio } from 'react-bootstrap';
import TextFieldGroup from '../../components/common/formFields';
import { connect } from 'react-redux';
import { createProvider, updateProvider } from '../../actions/providerActions'
import Departments from '../../components/users/Departments'

class ProvidersForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProvider: this.props.provider || {
        id: "",
        name: "",
        address: "",
        phone: "",
        first_visit: "",
        department: "",
        notes: ""
      }
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.selectedProvider.id === "") {
      this.props.createProvider(this.state)
    } else {
      this.props.updateProvider(this.state.selectedProvider.id, this.state)
    }
  }

  render() {

    return (
      <div className="formContainer">
        <Form onSubmit={this.handleSubmit}>
          <TextFieldGroup
            label="Name:"
            id="formControlsName"
            type="text"
            name="name"
            placeholder="name"
            value={this.state.selectedProvider.name}
            onChange={this.handleChange}
          />
          <TextFieldGroup
            label="Address:"
            id="formControlsAddress"
            type="text"
            name="address"
            placeholder="address"
            value={this.state.selectedProvider.address}
            onChange={this.handleChange}
          />
          <TextFieldGroup
            label="Phone:"
            id="formControlsPhone"
            type="text"
            name="phone"
            placeholder="phone"
            value={this.state.selectedProvider.phone}
            onChange={this.handleChange}
          />
          <TextFieldGroup
            label="First Visit:"
            id="formControlsFirstVisit"
            type="text"
            name="first_visit"
            placeholder="first_visit"
            value={this.state.selectedProvider.first_visit}
            onChange={this.handleChange}
           />
          <TextFieldGroup
             label="Notes:"
             id="formControlsNotes"
             type="text"
             name="notes"
             placeholder="notes"
             value={this.state.selectedProvider.notes}
             onChange={this.handleChange}
          />
         <br />
         <Button bsStyle="success" type="submit" value="Add Provider">Add Provider</Button>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // return {
  //
  // }
}

export default connect(mapStateToProps, {
  updateProvider,
  createProvider
})(ProvidersForm);

// <FormGroup>
//   <Radio
//     name="departments[]"
//     value={this.props.departments}
//     inline>
//     Primary Care
//   </Radio>
//   <Radio
//     name="departments[]"
//     value={this.props.departments}
//     inline>
//     Psychiatrist
//   </Radio>
//   <Radio
//     name="departments[]"
//     value={this.props.departments}
//     inline>
//     Therapist
//   </Radio>
// </FormGroup>
//
// <FormGroup>
//   <Radio
//     name="department_id"
//     value="1"
//
//     onChange={this.handleChange}
//     inline>
//     Primary
//   </Radio>
//   <Radio
//     name="department_id"
//     value="2"
//     onChange={this.handleChange}
//     inline>
//     Psychiatrist
//   </Radio>
//   <Radio
//     name="department_id"
//     value="3"
//     onChange={this.handleChange}
//     inline>
//     Therapist
//   </Radio>
// </FormGroup>
