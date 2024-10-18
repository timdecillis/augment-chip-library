import "./App.css";
import createChip from "./lib/chipCreator";
import Container from "./lib/Container";


const displayComponents = [createChip("Primary", "Small"), createChip("Secondary", "Medium")];

function App() {
  return (
    <div className="App">
      <Container components={displayComponents} />
    </div>
  );
}

export default App;
