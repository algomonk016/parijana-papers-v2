import React from "react";
import { FieldContainer, TextArea } from "./_fieldStyles";

function TextAreaField(props) {
  return (
    <FieldContainer>
      <div className="label">{props.label}</div>
      <TextArea
        type="text"
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onBlur={props.handleBlur}
        onChange={props.onChange}
      />
      {props.error && props.touched[props.name] && (
        <div className="error">{props.error}</div>
      )}
    </FieldContainer>
  );
}

export default TextAreaField;
