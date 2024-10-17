import "./App.css";
import AugmentChip from "./lib/AugmentChip";
import Container from "./lib/Container";

function App() {
  const component = (
    <AugmentChip
      Type="Primary"
      Size="Medium"
      StartIcon="none"
      Label="test chip"
      IsAnimating={true}
      EndAddOn="none"
    />
  );
  return (
    <div className="App">
      <Container propComponent={component} />
    </div>
  );
}

export default App;
