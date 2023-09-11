import { useRef , useEffect } from "react"
import Word from "./Word"
export default function WordCanvas(props) {
    

    return <div  className="flex flex-col gap-1.5">
          <Word />
          <Word />
          <Word />
          <Word />
          <Word />
          <Word />
        </div>
}
