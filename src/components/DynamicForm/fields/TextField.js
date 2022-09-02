import React from "react";
import { FieldContainer, Input } from "./_fieldStyles";

function TextField(props) {
  return (
    <FieldContainer>
      <div className="label">{props.label}</div>
      <Input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onBlur={props.handleBlur}
        onChange={props.onChange}
      />
      {props.error && props.touched[props.name] && (
        <div className="error">{props.error}</div>
      )}
    </FieldContainer>
  );
}

export default TextField;
