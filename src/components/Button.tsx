import { useState } from "react";

interface Props {
  children: string;
  color?: string;
  onClickFunction: () => void;
}

function Button({ children, color = "primary", onClickFunction }: Props) {
  return (
    <div>
      <button className={"btn btn-" + color} onClick={onClickFunction}>
        {children}
      </button>
    </div>
  );
}

export default Button;
