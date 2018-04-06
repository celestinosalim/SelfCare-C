import React from 'react';
import { ControlLabel, FormControl } from 'react-bootstrap';

const TextFieldGroup = ({ label, id, type, name, placeholder, value, onChange }) => {
  return (
    <div className="formFields">
      <ControlLabel>{label}</ControlLabel>
      <FormControl
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default TextFieldGroup;
