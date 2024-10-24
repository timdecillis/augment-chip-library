import "./App.css";
import createChip from "./utils/chipCreator";
import Container from "./lib/Container/Container";

const icon = <i className="fa-solid fa-music"></i>
const addOn = <i className="fa-solid fa-chevron-down"></i>

const displayComponents = [createChip("label", "primary", "medium", icon, addOn), createChip("label", "secondary", "medium", icon, addOn), createChip("label", "terniary", "medium", icon, addOn), createChip("label", "secondary", 'small', icon, addOn), createChip("label", "secondary", 'medium', icon, addOn), createChip("this is a really long label hey hey hey this is a long label", "secondary", 'large', icon, addOn)];

function App() {
  return (
    <div className="App">
      <Container components={displayComponents} />
    </div>
  );
}

export default App;
