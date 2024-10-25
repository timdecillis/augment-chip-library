import "./App.css";
import createChip from "./utils/chipCreator";
import Container from "./lib/Container/Container";
import { icon, addOn } from "./icons";

const chipArrayCreator = (
  arrays: []
) => {
  arrays.map((array) => {
    return createChip(...array);
  });
};

const chipParameters = [
  ["label", "primary", "medium", icon, addOn, false],
  ["label", "secondary", "medium", icon, addOn, false],
  ["label", "terniary", "medium", icon, addOn, false],
  ["label", "secondary", "small", icon, addOn, false],
  ["label", "secondary", "medium", icon, addOn, false],
  [
    "this is a really long label hey hey hey this is a long label",
    "secondary",
    "large",
    icon,
    addOn,
    false,
  ],
];

const displayComponents = chipArrayCreator(chipParameters);

function App() {
  return (
    <div className="App">
      <Container components={displayComponents} />
    </div>
  );
}

export default App;
