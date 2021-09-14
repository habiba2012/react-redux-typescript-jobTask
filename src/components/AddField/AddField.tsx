import React, { useState } from "react";
import "./AddField.scss";
import { useDispatch } from "react-redux";
import { addField } from "../../actions/fieldActions";
import uuid from "uuid/dist/v4";

const AddField = () => {
  // Dispatch
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  // Handling the change of the Field Name input
  const handleChange = (e) => {
    setName(e.target.value);
  };

  // Adding the field
  const handleAdd = (field: any) => dispatch(addField(field) as any);

  // Handling submit
  const handleSubmit = () => {
    // Default field object ( UUID IS USED FOR FIELD_KEY )
    const field = {
      field_key: uuid(),
      field_name: name,
      options: [],
      rules: [],
    };

    handleAdd(field);

    // Cleaning the field name input
    const input = document.getElementById("input") as HTMLInputElement;
    input.value = "";
  };

  return (
    <div className="addField">
      <label>Field name</label>
      <input
        type="text"
        placeholder="Enter Field Name"
        required
        onChange={handleChange}
        id="input"
      />
      <button type="submit" onClick={handleSubmit}>
        Add Field
      </button>
    </div>
  );
};

export default AddField;
