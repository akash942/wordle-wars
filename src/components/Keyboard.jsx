import Button from "./Button";
import Enter from "./Enter";
import Cross from "./Cross";
export default function Keyboard(props) {
  const firstRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const secondRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const thirdRow = ["Z", "X", "C", "V", "B", "N", "M"];
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-row gap-1">
        {firstRow.map((letter) => (
          <Button key={letter} letter={letter} />
        ))}
      </div>
      <div className="flex flex-row justify-center items-center gap-1">
        {secondRow.map((letter) => (
          <Button key={letter} letter={letter} />
        ))}
      </div>
      <div className="flex flex-row gap-1 justify-center items-center mx-0">
        <Enter />
        {thirdRow.map((letter) => (
          <Button key={letter} letter={letter} />
        ))}
        <Cross />
      </div>
    </div>
  );
}
