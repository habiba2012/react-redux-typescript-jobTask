import { createContext } from "react";

// Context for all Fields

interface FieldContextInterface {
  [index: number]: string;
}

const FieldsContext = createContext<FieldContextInterface | null>(null);

export default FieldsContext;
