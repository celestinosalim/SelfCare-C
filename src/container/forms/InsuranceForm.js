import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import TextFieldGroup from '../../components/common/formFields';
import { connect } from 'react-redux';
import { updateInsuranceFormData, createInsurance} from '../../actions/insuranceActions'

class InsuranceForm extends Component {

  handleChange = (e) => {
    const { name, value } = e.target
    const currentInsuranceFormData = Object.assign({}, this.props.insuranceFormData, {
      [name]: value
    })
    this.props.updateInsuranceFormData(currentInsuranceFormData)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createInsurance(this.props.insuranceFormData)
  }

  render() {

    const { name, address, phone, notes } = this.props.insuranceFormData;

    return (
      <div className="formContainer">
        <h3>Add a New Insurance</h3>
        <Form onSubmit={this.handleSubmit}>
          <TextFieldGroup
            label="Name:"
            id="formControlsName"
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={this.handleChange}
          />
          <TextFieldGroup
            label="Address:"
            id="formControlsAddress"
            type="text"
            name="address"
            placeholder="Address"
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
             label="Notes:"
             id="formControlsNotes"
             type="text"
             name="notes"
             placeholder="notes"
             value={notes}
             onChange={this.handleChange}
            />
         <div className="submissionFields">
           <Button type="submit" value="Add Insurance">Add Insurance</Button>
         </div>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    insuranceFormData: state.insuranceFormData
  }
}

export default connect(mapStateToProps, {
  updateInsuranceFormData,
  createInsurance
})(InsuranceForm);
