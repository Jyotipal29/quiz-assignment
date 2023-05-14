import React from "react";
import { data } from "../data";
const Buttons = ({
  setCurrQuesIndex,
  currQuesIndex,
  submittedData,
  calculateScore,
}) => {
  return (
    <div className="space-x-8 py-4">
      <button
        className="bg-blue-500 py-1 px-7 text-white uppercase font-bold rounded-sm "
        style={{
          backgroundColor:
            currQuesIndex === 0 ? "gray" : "rgba(59, 130, 246,1)",
        }}
        disabled={currQuesIndex === 0}
        onClick={() => setCurrQuesIndex(currQuesIndex - 1)}
      >
        back
      </button>
      <button
        className="bg-blue-500 py-1 px-7 text-white uppercase font-bold rounded-sm "
        style={{
          backgroundColor: !submittedData[currQuesIndex]
            ? "gray"
            : "rgba(59, 130, 246,1)",
        }}
        disabled={!submittedData[currQuesIndex]}
        onClick={() => {
          if (currQuesIndex < data.length - 1) {
            setCurrQuesIndex(currQuesIndex + 1);
          } else {
            calculateScore();
          }
        }}
      >
        {currQuesIndex < data.length - 1 ? "next" : "submit"}
      </button>
    </div>
  );
};

export default Buttons;
