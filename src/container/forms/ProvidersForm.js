import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import TextFieldGroup from '../../components/common/formFields';
import { connect } from 'react-redux';
import { updateProviderFormData, createProvider } from '../../actions/providerActions'

class ProvidersForm extends Component {

  handleChange = (e) => {
    const { name, value } = e.target
    const currentProviderFormData = Object.assign({}, this.props.providerFormData, {
      [name]: value
    })
    this.props.updateProviderFormData(currentProviderFormData)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createProvider(this.props.providerFormData)
  }

  render() {
    const { name, address, phone, department, first_visit, notes } = this.props.providerFormData;
    return (
      <div className="formContainer">
        <h3>Add a Provider</h3>
        <Form onSubmit={this.handleSubmit}>
          <TextFieldGroup
            label="Name:"
            id="formControlsName"
            type="text"
            name="name"
            placeholder="name"
            value={name}
            onChange={this.handleChange}
          />
          <TextFieldGroup
            label="Address:"
            id="formControlsAddress"
            type="text"
            name="address"
            placeholder="address"
            value={address}
            onChange={this.handleChange}
          />
          <TextFieldGroup
            label="Phone:"
            id="formControlsPhone"
            type="text"
            name="phone"
            placeholder="phone"
            value={phone}
            onChange={this.handleChange}
          />
          <TextFieldGroup
             label="Department:"
             id="formControlsDepartment"
             type="text"
             name="department"
             placeholder="department"
             value={department}
             onChange={this.handleChange}
          />
          <TextFieldGroup
            label="First Visit:"
            id="formControlsFirstVisit"
            type="text"
            name="first_visit"
            placeholder="first_visit"
            value={first_visit}
            onChange={this.handleChange}
           />
          <TextFieldGroup
             label="Notes:"
             id="formControlsNotes"
             type="text"
             name="notes"
             placeholder="notes"
             value={notes}
             onChange={this.handleChange}
          />

         <Button type="submit" value="Add Provider">Add Provider</Button>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    providerFormData: state.providerFormData
  }
}

export default connect(mapStateToProps, {
  updateProviderFormData,
  createProvider
})(ProvidersForm);

// import { Form, Button, FormGroup, ControlLabel, FormControl, Radio, Checkbox} from 'react-bootstrap';
// <FormGroup>
//   <Radio name="radioGroup" inline>
//     Primary Care/General Practicioner
//   </Radio>
//   <Radio name="radioGroup" inline>
//     Psychiatrist
//   </Radio>
//   <Radio name="radioGroup" inline>
//     Therapist
//   </Radio>
// </FormGroup>
// <FormGroup>
//   <Checkbox name="checkBox" inline>
//     Currently Seeing
//   </Checkbox>
// </FormGroup>
