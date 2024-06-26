import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import ThemeToggle from "./components/ThemeToggle";
import Text from "./components/text";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div className="App">
          <h1>My Theme Switcher App</h1>
          <ThemeToggle />
          <Text />
        </div>
      </Provider>
    </div>
  );
}

export default App;
