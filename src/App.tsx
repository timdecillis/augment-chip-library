import "./App.css";
import createChip from "./utils/chipCreator";
import Container from "./lib/Container/Container";

const icon = <i className="fa-solid fa-music"></i>

const displayComponents = [createChip("primary", "medium", icon), createChip("secondary", "medium", icon), createChip("terniary", "medium", icon), createChip("secondary", 'small', icon), createChip("secondary", 'medium', icon), createChip("secondary", 'large', icon)];

function App() {
  return (
    <div className="App">
      <Container components={displayComponents} />
    </div>
  );
}

export default App;
