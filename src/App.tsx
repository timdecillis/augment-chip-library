import "./App.css";
import Container from "./lib/Container/Container";
import displayComponents from "./utils/chipCreator";



function App() {
  return (
    <div className="App">
      <h1>Augment Chip Library</h1>
      <h2>Another One</h2>
      <Container components={displayComponents} />
    </div>
  );
}

export default App;
