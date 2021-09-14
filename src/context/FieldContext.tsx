import { createContext } from "react";

// Context for Items inside the Field

const FieldContext = createContext<string | null>(null);

export default FieldContext;
