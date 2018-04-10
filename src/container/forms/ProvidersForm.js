import React, { Component } from 'react';
import { ControlLabel, FormControl, Radio, Checkbox, Button, Col} from 'react-bootstrap';
import TextFieldGroup from '../../components/common/formFields';
import { connect } from 'react-redux';
// import { updateProviderFormData, createProvider } from '../../actions/providerActions'

class ProvidersForm extends Component {
  render() {
    const { name, address, phone, notes } = this.props.providerFormData;

    return (
      <div className="formContainer">
        <h1>Add a Provider</h1>
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
           <FormGroup>
             <Radio name="radioGroup" inline>
               Primary Care/General Practicioner
             </Radio>
             <Radio name="radioGroup" inline>
               Psychiatrist
             </Radio>
             <Radio name="radioGroup" inline>
               Therapist
             </Radio>
           </FormGroup>
           <FormGroup>
             <Checkbox name="checkBox" inline>
               Currently Seeing
             </Checkbox>
           </FormGroup>
         <Button type="submit" value="Add Provider">Add Provider</Button>
        </Form>
      </div>
    )
  }
}

export default ProvidersForm
