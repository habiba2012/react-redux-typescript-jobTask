import React, { FC } from "react";
import "./Details.scss";
import Options from "../Options/Options";
import Rules from "../Rules/Rules";

// Simple Component used for getting Options and Rules

const Details: FC = () => {
  return (
    <div className="details">
      <Options />
      <Rules />
    </div>
  );
};

export default Details;
