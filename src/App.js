import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import Nav from "./components/Nav";
import Keyboard from "./components/Keyboard";
import WordCanvas from "./components/WordCanvas";

function App() {
  const [word, setWord] = useState("");
  const [current, setCurrent] = useState(0)

  function checkWord(word) {
    console.log("checking...",word);
    setCurrent(prevCurr=>prevCurr+1)
    setWord("")
  }

  useEffect(() => {
    const handleClick = (e) => {
      console.log("word:",word);
      console.log(word.length);
      if (e.key.length === 1 && word.length <= 4) {
        if ((e.key >= "a" && e.key <= "z") || (e.key >= "A" && e.key <= "Z")) {
          // console.log(e.key)
          const word = e.key.toUpperCase();
          setWord((prev) => prev + word);
        }
      } else if (e.key === "Enter") {
        console.log("enter was pressed");
        checkWord(word)
      } else if (e.key === "Backspace") {
        setWord((prev) => {
          const newWordArr = prev.slice(0, -1);
          return newWordArr;
        });
      }
    };

    window.addEventListener("keydown", handleClick);

    return () => {
      window.removeEventListener("keydown", handleClick);
    };
  }, [word]);
  
  return (
    <div className="main bg-[#0e0f10] text-white">
      <Nav />
      <div className="center-div p-5 ">
        <WordCanvas word={word} current={current} />
      </div>
      <div className="center-div pt-2">
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
