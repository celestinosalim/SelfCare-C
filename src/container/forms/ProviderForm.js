import React, { Component } from 'react';
import { Form, Button, FormGroup, Radio } from 'react-bootstrap';
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
      departments: [{
        id: "",
        name: ""
      }],
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

    // const theDepts =
    //   this.state.selectedProvider.departments.map((department, index) => <FormGroup>
    //     <Radio
    //       name={department.name}
    //       value={index}
    //       onChange={this.handleChange}
    //       inline>
    //       Primary
    //     </Radio>
    //     <Radio
    //       name={department.name}
    //       value={index}
    //       onChange={this.handleChange}
    //       inline>
    //       Psychiatrist
    //     </Radio>
    //     <Radio
    //       name={department.name}
    //       value={index}
    //       onChange={this.handleChange}
    //       inline>
    //       Therapist
    //     </Radio>
    //   </FormGroup>
    //   )

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
          Primary
          <input
            type="checkbox"
            value="Primary"
            name="departments"
            checked={this.state.checked}
            onChange={this.handledCheckboxChange}/>
          </label>

          <label>
          Psychiatrist
          <input
            type="checkbox"
            value="Psychiatrist"
            name="departments"
            defaultChecked=""/>
          </label>

          <label>
          Therapist
          <input
            type="checkbox"
            value="Therapist"
            name="departments"
            defaultChecked=""/>
          </label>


         <br />
         <Button bsStyle="success" type="submit" value="Add Provider">Add Provider</Button>
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
  updateProvider,
  createProvider
})(ProvidersForm);

// <FormGroup>
//   <Radio
//     id="1"
//     name="Primary"
//     value="Primary"
//     onChange={this.handleChange}
//     inline>
//     Primary
//   </Radio>
//   <Radio
//     id="2"
//     name="Psychiatrist"
//     value="Psychiatrist"
//     onChange={this.handleChange}
//     inline>
//     Psychiatrist
//   </Radio>
//   <Radio
//     id="3"
//     name="Therapist"
//     value="Therapist"
//     onChange={this.handleChange}
//     inline>
//     Therapist
//   </Radio>
// </FormGroup>



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

// <FormGroup>
//   <Radio
//     name="departments"
//     value={this.state.selectedProvider.departments.id}
//     onChange={this.handleChange}
//     inline>
//     Primary
//   </Radio>
//   <Radio
//     name="departments"
//     value={this.state.selectedProvider.departments.id}
//     onChange={this.handleChange}
//     inline>
//     Psychiatrist
//   </Radio>
//   <Radio
//     name="departments"
//     value={this.state.selectedProvider.departments.id}
//     onChange={this.handleChange}
//     inline>
//     Therapist
//   </Radio>
// </FormGroup>
