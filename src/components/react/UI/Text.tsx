import type { ReactElement, ReactNode } from "react";
interface Props {
  children: ReactNode;
}

export default function Text({ children }: Props) {
  let value = (children as ReactElement).props.value;
  if (value && value.length > 0) {
    return (
      <div className="text-container">
        <span className="txt anim-text-flow ">
          {value.split("").map((str: string, index: number) => (
            <span key={str + index}>{str}</span>
          ))}
        </span>
      </div>
    );
  }
  return <div className="red">add text</div>;
}
