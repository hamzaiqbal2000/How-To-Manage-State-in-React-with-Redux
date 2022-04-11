import React from "react";
import { useSelector } from "react-redux";

function App() {
  const birds = useSelector((state) => state.birds);
  return (
    <div className="wrapper">
      <ul>
        <h1>Bird List</h1>
        <form action="">
          <label htmlFor="">
            <p>Add a bird</p>
            <input type="text" />
          </label>
          <div>
            <button type="submit">Add</button>
          </div>
        </form>
        {birds.map((bird) => (
          <li key={bird.name}>
            <h3>{bird.name}</h3>
            <div>
              Views: {bird.views} <br />
              <button>
                <span role="img" aria-label="add">
                  ➕
                </span>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
