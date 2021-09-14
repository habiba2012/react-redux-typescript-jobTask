import React from "react";
import "./Wireframe.scss";
import Field from "../Field/Field";
import AddField from "../AddField/AddField";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import FieldContext from "../../context/FieldsContext";

const Wireframe: React.FC = () => {
  // Allows you to extract data from the Redux store state
  const fields = useSelector((state: RootState) => state.field.fields);

  return (
    <div className="wireframe">
      <h1>Accutics Coding Challenge:</h1>
      <div className="main">
        <div className="mobile">
          <AddField />
        </div>
        <div className="wireframe__fields">
          <FieldContext.Provider value={fields}>
            <Field />
          </FieldContext.Provider>
        </div>
        <div className="computer">
          <AddField />
        </div>
      </div>
    </div>
  );
};

export default Wireframe;
