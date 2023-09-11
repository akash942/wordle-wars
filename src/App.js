import "./App.css";
import "./index.css";
import Nav from "./components/Nav";
import Keyboard from "./components/Keyboard";
import WordCanvas from "./components/WordCanvas";

function App() {
  return (
    <div className="main bg-[#0e0f10] text-white">
      <Nav />
      <div className="center-div p-5 ">
        <WordCanvas />
      </div>
      <div className="center-div pt-2">
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
