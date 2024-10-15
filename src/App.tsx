import React from "react";
import "./App.css";
import AugmentChip from "./lib/AugmentChip";

function App() {
  return (
    <div className="App">
      <AugmentChip
        Type="Secondary"
        Size="Medium"
        StartIcon="none"
        Label="test chip"
        IsAnimating={true}
        EndAddOn="none"
      />
    </div>
  );
}

export default App;
