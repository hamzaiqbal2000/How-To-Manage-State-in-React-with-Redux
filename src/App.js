import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBird, incrementBird } from "./store/birds/birds";

function App() {
  const birds = [...useSelector((state) => state.birds)].sort((a, b) => {
    return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
  });
  const dispatch = useDispatch();
  const [birdName, setBird] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addBird(birdName));
    setBird("");
  }

  return (
    <div className="wrapper">
      <ul>
        <h1>Bird List</h1>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="">
            <p>Add a bird</p>
            <input
              type="text"
              onChange={(e) => setBird(e.target.value)}
              value={birdName}
            />
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
              <button onClick={() => dispatch(incrementBird(bird.name))}>
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
