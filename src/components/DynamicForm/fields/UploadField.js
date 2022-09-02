import React from "react";
import { FieldContainer, Upload } from "./_fieldStyles";

function UploadField(props) {
  return (
    <FieldContainer>
      <div className="label">{props.label}</div>
      <Upload
        type="file"
        name={props.name}
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

UploadField.defaultValue = {};

export default UploadField;
