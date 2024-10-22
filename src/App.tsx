import "./App.css";
import createChip from "./utils/chipCreator";
import Container from "./lib/Container/Container";

const icon = <i className="fa-solid fa-music"></i>
const addOn = <i className="fa-solid fa-chevron-down"></i>

const displayComponents = [createChip("primary", "medium", icon, addOn), createChip("secondary", "medium", icon, addOn), createChip("terniary", "medium", icon, addOn), createChip("secondary", 'small', icon, addOn), createChip("secondary", 'medium', icon, addOn), createChip("secondary", 'large', icon, addOn)];

function App() {
  return (
    <div className="App">
      <Container components={displayComponents} />
    </div>
  );
}

export default App;
