import React from "react";
import { useSelector } from "react-redux";

function App() {
  const birds = useSelector((state) => state.birds);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
