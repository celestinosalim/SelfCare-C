import React, { Component } from 'react';
import { Form, Button, FormGroup } from 'react-bootstrap';
import TextFieldGroup from '../../components/common/formFields';
import { connect } from 'react-redux';
import { createProvider, updateProvider } from '../../actions/providerActions'
import Departments from '../users/Departments'

class ProvidersForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      address: "",
      phone: "",
      first_visit: "",
      departments: [
        {id: 1, name: "Primary"},
        {id: 2, name: "Psychiatrist"},
        {id: 3, name: "Therapist"}
      ],
      notes: "",
      checked: true
    }
  }

  componentDidMount() {
    this.setState({
      ...this.props.provider
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handledCheckboxChange = (e) => {
    this.setState({
      departments: [{
        id: e.target.checked
      }]
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.id === "") {
      this.props.createProvider(this.state)
    } else {
      this.props.updateProvider(this.state.id, this.state)
    }
  }

  render() {
    return (
      <div className="formContainer">
        <Form onSubmit={this.handleSubmit} data-id={this.state.id}>
          <TextFieldGroup
            label="Name:"
            id="formControlsName"
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <TextFieldGroup
            label="Address:"
            id="formControlsAddress"
            type="text"
            name="address"
            placeholder="address"
            value={this.state.address}
            onChange={this.handleChange}
          />
          <TextFieldGroup
            label="Phone:"
            id="formControlsPhone"
            type="text"
            name="phone"
            placeholder="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />
          <TextFieldGroup
            label="First Visit:"
            id="formControlsFirstVisit"
            type="text"
            name="first_visit"
            placeholder="first_visit"
            value={this.state.first_visit}
            onChange={this.handleChange}
           />
          <TextFieldGroup
             label="Notes:"
             id="formControlsNotes"
             type="text"
             name="notes"
             placeholder="notes"
             value={this.state.notes}
             onChange={this.handleChange}
          />

          <label>
            Department/Speciality:
          </label>
          <FormGroup>
            <Departments
              departments={this.state.departments}
              checked={this.state.checked}
              onChange={this.handleChange} onClick={this.handledCheckboxChange}/>
          </FormGroup>

         <br />
         <Button bsStyle="success" type="submit" value="Add Provider">Add Provider</Button>
        </Form>
      </div>
    )
  }
}

export default connect(null, {
  updateProvider,
  createProvider
})(ProvidersForm);
