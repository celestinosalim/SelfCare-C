import React, { Component } from 'react';
import { ControlLabel, FormControl, Radio, Checkbox, Button, Col} from 'react-bootstrap';

class UserProvidersForm extends Component {
  render() {
    return (
      <div className="bodyContainer">
        <div className="formContainer">
          <h1>Add a Provider</h1>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <ControlLabel>Provider Name</ControlLabel>
            <FormControl
               id="formControlsText"
               type="text"
               name="name"
               placeholder="Name"
               value={this.state.name}
               onChange={this.onInputChange(e)}
             />
             <ControlLabel>Address</ControlLabel>
             <FormControl
               id="formControlsAddress"
               type="text"
               name="address"
               placeholder="Address"
               value={this.state.address}
               onChange={this.onInputChange(e)}
             />
             <ControlLabel>Phone</ControlLabel>
             <FormControl
               id="formControlsPhone"
               type="text"
               name="phone"
               placeholder="Phone #"
               value={this.state.phone}
               onChange={this.onInputChange(e)}
             />
             <ControlLabel>Date of First Visit</ControlLabel>
             <FormControl
               id="formControlsDate"
               type="text"
               name="date"
               value={this.state.first_visit}
               onChange={this.onInputChange(e)}
             />
             <ControlLabel>Notes:</ControlLabel>
             <FormControl
               id="formControlsNotes"
               componentClass="textarea"
               name="date"
               placeholder="Enter any notes about this provider."
               value={this.state.notes}
               onChange={this.onInputChange(e)}
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
           <Button type="submit" value="Login">Add Provider</Button>
          </form>
        </div>
      </div>
    )
  }
}

export default UserProvidersForm
