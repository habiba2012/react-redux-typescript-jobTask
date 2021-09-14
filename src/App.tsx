import React, { useEffect } from "react";
import "./App.css";
import Wireframe from "./components/Wireframe/Wireframe";

import { Provider } from "react-redux";
import store from "./store/store";
import { getFields } from "./actions/fieldActions";

const App: React.FC = () => {
  // Getting All Fields
  useEffect(() => {
    store.dispatch(getFields() as any);
  }, []);
  return (
    <Provider store={store}>
      <div className="App">
        <Wireframe />
      </div>
    </Provider>
  );
};

export default App;
