import React from "react";
import "./App.css";
import { Button } from "./components";
import { useResizeWindow } from "./customHooks";

function App() {
  const size = useResizeWindow();
  console.log(size);

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-textContent">
          <div className="App-textContent__text">
            <Button
              textToCopy="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio quos
            eum nobis esse, dolores unde non nisi molestias tempora qui?"
            />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio quos
            eum nobis esse, dolores unde non nisi molestias tempora qui?
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
