import logo from "./logo.svg";
import "./App.css";
import PicList from "./componnets/PicList";
import DenseAppBar from "./componnets/Navbar";

function App() {
  return (
    <div className="App">
      <DenseAppBar />
      <PicList />
    </div>
  );
}

export default App;
