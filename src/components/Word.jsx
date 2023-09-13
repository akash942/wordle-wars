// import { useState } from "react";
import Letter from "./Letter";

export default function Word(props) {


  return (
    <div
      className="flex flex-row gap-1.5 justify-center content-center max-w-max "
    >
      <Letter letter={props.word[0]} />
      <Letter letter={props.word[1]} />
      <Letter letter={props.word[2]} />
      <Letter letter={props.word[3]} />
      <Letter letter={props.word[4]} />
    </div>
  );
}
