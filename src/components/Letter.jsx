import { useState } from "react"

export default function Letter(props) {

    // const [input, setInput] = useState("");

    const yellow = "#907e2f"
    const gray = "#2c3032"
    const green = "#42713e"

    return <div onClick={()=>{console.log("clicked")}} style={{backgroundColor: green, border: "solid gray 0.5px"}} className="letter" >{props.letter}</div>
};
