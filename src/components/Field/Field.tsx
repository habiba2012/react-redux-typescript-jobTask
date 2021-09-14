import React, { useState } from "react";
import "./Field.scss";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { BiPencil } from "react-icons/bi";
import Details from "../Details/Details";
import { useContext, useEffect } from "react";
import FieldsContext from "../../context/FieldsContext";
import FieldContext from "../../context/FieldContext";

const Field = () => {
  // Getting fields
  const fields = useContext(FieldsContext);

  const [expanded, setExpanded] = useState("");
  const [edit, setEdit] = useState("");
  const [name, setName] = useState("");

  // Handling the change of the name
  const handleChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    // This allows you to submit Field name by pressing Enter

    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        console.log("Enter key was pressed. Run your function.");
        console.log(edit);
        event.preventDefault();
        // callMyFunction();
        if (edit !== "") {
          console.log("ENTER 1");
          if (fields instanceof Array && fields.length !== 0) {
            console.log("Enter 2");
            // eslint-disable-next-line array-callback-return
            fields.map((field) => {
              console.log("enter 3");
              console.log(field.field_);
              // eslint-disable-next-line @typescript-eslint/no-unused-expressions
              if (field.field_key === edit) {
                field.field_name = name;
                setEdit("");
              }
            });
          }
        }
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [edit, name]);

  // Function for rendering the fields
  const renderFields = () => {
    if (fields instanceof Array && fields.length !== 0) {
      return fields.map((field) => {
        return (
          <div className="field">
            <div className="fieldHeader">
              {edit === field.field_key ? (
                <input
                  type="text"
                  placeholder={field.field_name}
                  onChange={handleChange}
                ></input>
              ) : (
                <h1>{field.field_name}</h1>
              )}
              <div className="field__icons">
                <BiPencil
                  className="field__icon"
                  onClick={() => setEdit(edit === "" ? field.field_key : "")}
                />
                {expanded === field.field_key ? (
                  <RiArrowDropUpLine
                    className="field__icon field__icon-dropdown"
                    onClick={() => setExpanded("")}
                  />
                ) : (
                  <RiArrowDropDownLine
                    className="field__icon field__icon-dropdown"
                    onClick={() => setExpanded(field.field_key)}
                  />
                )}
              </div>
            </div>

            {expanded === field.field_key ? (
              <div className="mainBody">
                <FieldContext.Provider value={field.field_key}>
                  <Details />
                </FieldContext.Provider>
              </div>
            ) : undefined}
          </div>
        );
      });
    }
  };

  return <>{renderFields()}</>;
};

export default Field;
