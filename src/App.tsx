import "./App.css";
import createChip from "./lib/chipCreator";
import Container from "./lib/Container";


const displayComponents = [createChip("primary", "medium"), createChip("secondary", "medium"), createChip("terniary", "medium"), createChip("secondary", 'small')];

function App() {
  return (
    <div className="App">
      <Container components={displayComponents} />
    </div>
  );
}

export default App;
