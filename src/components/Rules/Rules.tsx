import React, { useEffect, useContext, useState } from "react";
import "./Rules.scss";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { getRules, addRule } from "../../actions/ruleActions";
import FieldContext from "../../context/FieldContext";

const Rules = () => {
  //Extracting data from the Redux store state
  const rules = useSelector((state: RootStateOrAny) => state.rule.rules);
  const dispatch = useDispatch();
  const fields = useSelector((state: RootStateOrAny) => state.field.fields);

  // Getting the specific field_key
  const key = useContext(FieldContext);

  useEffect(() => {
    dispatch(getRules(key) as any);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fields, key]);

  // Default rule object
  const ruleDefault = {
    rule_field_key: key,
    rule_value: "",
    children: [],
  };

  // Used for refreshing the rules
  const [change, setChange] = useState(false);

  // Adding Rules
  const handleAdd = () => dispatch(addRule(ruleDefault) as any);

  // Adding Groups
  const handleAddGroup = (rule: any) => {
    rule.children = [...rule.children, ruleDefault];
    setChange(!change);
  };

  useEffect(() => {}, []);

  // Recursive function responsible for the display of the nested data

  const ruleChildren = (children: any): JSX.Element[] => {
    if (children.length !== 0) {
      return children.map((child: any) => {
        return (
          <div className="container">
            <div className="userInput">
              <select>
                <option value="" selected>
                  Choose field
                </option>
                {fields.map((field: any) => {
                  return <option>{field.field_key}</option>;
                })}
              </select>
              <input
                type="text"
                placeholder={
                  child.rule_value === ""
                    ? "Enter field value"
                    : child.rule_value
                }
                className="ruleInput"
              />
            </div>
            {ruleChildren(child.children)}
            <div className="addGroup">
              <button
                type="submit"
                className="addGroupButton"
                onClick={() => handleAddGroup(child)}
              >
                Add Group
              </button>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div className="rules">
      <h1>Rules:</h1>
      {rules.map((rule: any, i: number) => {
        return (
          <div className="rule">
            <h1>{i + 1}</h1>
            <div className="container">
              <div className="userInput">
                <select>
                  <option value="" disabled selected>
                    Choose field
                  </option>
                  {fields.map((field: any) => {
                    return <option>{field.field_key}</option>;
                  })}
                </select>
                <input
                  type="text"
                  placeholder={
                    rule.rule_value === ""
                      ? "Enter field value"
                      : rule.rule_value
                  }
                  className="ruleInput"
                />
              </div>
              {ruleChildren(rule.children)}
              <div className="addGroup">
                <button
                  type="submit"
                  className="addGroupButton"
                  onClick={() => handleAddGroup(rule)}
                >
                  Add Group
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <div className="addRule">
        <button type="submit" className="addRuleButton" onClick={handleAdd}>
          Add Rule
        </button>
      </div>
    </div>
  );
};

export default Rules;
