import Letter from "./Letter";
import { useState, useRef, useEffect } from "react";

export default function Word(props) {
  // const [word, setWord] = useState("")
  // const divRef = useRef(null);

  // useEffect(() => {
  //   divRef.current.focus();
  // }, []);

  // function inputText(e) {
  //   if (e.key.length === 1) {
  //     if ((e.key >= "a" && e.key <= "z") || (e.key >= "A" && e.key <= "Z")) {
  //       console.log(e.key);
  //     }
  //   }
// }

  return (
    <div
      // ref={divRef}
      // tabIndex={2}
      // onKeyDown={inputText}
      className="flex flex-row gap-1.5 justify-center content-center max-w-max "
    >
      <Letter letter="B" />
      <Letter letter="L" />
      <Letter letter="A" />
      <Letter letter="S" />
      <Letter letter="T" />
    </div>
  );
}
