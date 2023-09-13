import { useEffect, useState } from "react";
import Word from "./Word";
export default function WordCanvas(props) {
  
  const [submittedWord, setSubmittedWord] = useState("")

  return (
    <div className="flex flex-col gap-1.5">
      <Word key={0} id={0}  word={submittedWord || (props.current===0 && props.word)} />
      <Word key={1} id={1}  word={props.current===1 && props.word} />
      <Word key={2} id={2} word={props.current===2 && props.word} />
      <Word key={3} id={3} word={props.current===3 && props.word} />
      <Word key={4} id={4} word={props.current===4 && props.word} />
      <Word key={5} id={5} word={props.current===5 && props.word} />
    </div>
  );
}
