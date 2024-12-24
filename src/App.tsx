import "./App.css";
import Container from "./lib/Container/Container";
import displayComponents from "./utils/chipCreator";

function App() {
  return (
    <div className="App">
      <Container components={displayComponents} />
    </div>
  );
}

export default App;
