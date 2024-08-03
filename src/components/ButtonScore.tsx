import { useState } from "react";
import { MouseEvent } from "react";

function button() {
  const [score, setScore] = useState(10);

  return (
    <div>
      <button
        type="button"
        className={score > 0 ? "btn btn-primary" : "btn btn-danger"}
        onClick={() => setScore(score - 1)}
      >
        Score: {score}
      </button>
    </div>
  );
}

export default button;
