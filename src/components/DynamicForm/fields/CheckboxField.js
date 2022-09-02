import React, { useState } from "react";
import { FieldContainer, Label } from "./_fieldStyles";

function CheckboxField(props) {
  const [checkedItems, setCheckedItems] = useState(new Map());

  const handleCheckItem = (e) => {
    const { name, value } = e.target;
    let items = new Map(checkedItems);
    if (checkedItems.has(name)) {
      items.delete(name);
    } else {
      items.set(name, value);
    }
    setCheckedItems(items);
    props.setFieldValue(props.name, Array.from(items.values()).toString());
  };

  return (
    <FieldContainer>
      <div className="label">{props.label}</div>
      {props.options.map((opt, index) => {
        return (
          <Label key={index}>
            <input
              type="checkbox"
              name={props.name + "-" + index}
              value={opt}
              checked={checkedItems.get(props.name + "-" + index)}
              onBlur={props.handleBlur}
              onChange={handleCheckItem}
            />
            {opt}
          </Label>
        );
      })}
      {props.error && props.touched[props.name] && (
        <div className="error">{props.error}</div>
      )}
    </FieldContainer>
  );
}

export default CheckboxField;
