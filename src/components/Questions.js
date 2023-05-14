import React from "react";
const Questions = ({
  currQues,
  updatedSubmission,
  currQuesIndex,
  selectedOption,
}) => {
  return (
    <div className="py-3 space-y-4 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold"> {currQues.question}</h1>
      <div>
        {currQues?.options.map((it) => (
          <li className="list-none space-x-2 text-lg font-bold">
            <input
              type="radio"
              value={it.text}
              onChange={() => updatedSubmission(currQuesIndex, it.text)}
              name={currQues.question}
              checked={it.text === selectedOption}
            />
            <span>{it.text}</span>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Questions;
