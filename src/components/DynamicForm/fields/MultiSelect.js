import React from "react";
import { FieldContainer } from "./_fieldStyles";
import Select from 'react-select';

function MultiSelect(props) {
  const handleChange = (value) => {
    props.onChange(props.name, Array.from(value).toString())
    props.setFieldValue(props.name, value)
  }

  // console.log('props', props)
  
  return (
    <FieldContainer>
      <div className="label">{props.label}</div>

      <Select
          id={props.id}
          name={props.name}
          options={props.options}
          onChange={handleChange}
          onBlur={props.handleBlur}
          value={props.value}
          isMulti = {props.type === "multiselect"}
        />

      {props.error && props.touched[props.name] && (
        <div className="error">{props.error}</div>
      )}
    </FieldContainer>
  );
}

export default MultiSelect;
