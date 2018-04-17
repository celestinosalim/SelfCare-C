import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import TextFieldGroup from '../../components/common/formFields';
import { connect } from 'react-redux';
import { createInsurance, updateInsurance } from '../../actions/insuranceActions'

class InsuranceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedInsurance: this.props.insurance || {
        id: "",
        name: "",
        address: "",
        phone: "",
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
    if (this.state.selectedInsurance.id === "") {
      this.props.createInsurance(this.state)
    } else {
      this.props.updateInsurance(this.state.selectedInsurance.id, this.state)
    }
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} data-id={this.state.selectedInsurance.id}>
        <TextFieldGroup
          label="Name:"
          id="formControlsName"
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.selectedInsurance.name}
          onChange={this.handleChange}
        />
        <TextFieldGroup
          label="Address:"
          id="formControlsAddress"
          type="text"
          name="address"
          placeholder="Address"
          value={this.state.selectedInsurance.address}
          onChange={this.handleChange}
         />
        <TextFieldGroup
          label="Phone:"
          id="formControlsPhone"
          type="text"
          name="phone"
          placeholder="phone"
          value={this.state.selectedInsurance.phone}
          onChange={this.handleChange}
         />
         <TextFieldGroup
           label="Notes:"
           id="formControlsNotes"
           type="text"
           name="notes"
           placeholder="notes"
           value={this.state.selectedInsurance.notes}
           onChange={this.handleChange}
          />
        <br />
         <Button bsStyle="success" type="submit" value="Add Insurance">Add Insurance</Button>
      </Form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    insuranceFormData: state.insuranceFormData
  }
}

export default connect(mapStateToProps, {
  createInsurance,
  updateInsurance
})(InsuranceForm);
