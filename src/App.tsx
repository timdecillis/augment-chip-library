import "./App.css";
import Container from "./lib/Container/Container";
import displayComponents from "./utils/chipCreator";

function App() {
  return (
    <div className="App">
      <h1>Augment Chip Demo</h1>
      <Container components={displayComponents} />
    </div>
  );
}

export default App;
