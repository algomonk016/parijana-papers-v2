import React from "react";
import { FieldContainer, Select } from "./_fieldStyles";

function SelectField(props) {
  return (
    <FieldContainer>
      <div className="label">{props.label}</div>
      <Select
        name={props.name}
        defaultValue={props.value}
        onBlur={props.handleBlur}
        onChange={props.onChange}
      >
        <option value={""}>Please Select</option>
        {props.options.map((opt, index) => {
          return (
            <option key={index} value={opt}>
              {opt}
            </option>
          );
        })}
      </Select>
      {props.error && props.touched[props.name] && (
        <div className="error">{props.error}</div>
      )}
    </FieldContainer>
  );
}

export default SelectField;
