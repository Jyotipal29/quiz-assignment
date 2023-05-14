import React, { useState } from "react";
import { data } from "../data";
import { CiTimer } from "react-icons/ci";
import Questions from "../components/Questions";
import Buttons from "../components/Buttons";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const navigate = useNavigate();

  const TIME_FOR_ONE_QUESTION = 30;
  const [totalTime, setTotalTime] = useState(
    data.length * TIME_FOR_ONE_QUESTION
  );
  const [currQuesIndex, setCurrQuesIndex] = useState(0);
  const [submittedData, setSubmittedData] = useState({});

  const timerId = setTimeout(() => {
    if (totalTime === 0) {
      calculateScore();
    } else {
      setTotalTime(totalTime - 1);
    }
  }, 1000);
  const calculateScore = () => {
    clearTimeout(timerId);
    let score = 0;
    data.forEach((question, index) => {
      if (question.answer === submittedData[index]) {
        score += 1;
      }
    });
    console.log(score);
    navigate("/score", {
      state: { score: score, submittedData: submittedData },
    });
  };
  const updatedSubmission = (index, value) => {
    setSubmittedData({ ...submittedData, [index]: value });
  };

  console.log(submittedData, "submmited data");
  return (
    <div className="container mx-auto px-8 mt-4 md:shadow-lg">
      <div className="flex flex-col justify-center items-center relative  py-4">
        <span className="absolute top-0 right-0  flex items-center text-blue-500 space-x-2">
          <CiTimer /> <span>{totalTime}</span>{" "}
        </span>
        <Questions
          currQuesIndex={currQuesIndex}
          currQues={data[currQuesIndex]}
          updatedSubmission={updatedSubmission}
          selectedOption={submittedData[currQuesIndex]}
        />
        <Buttons
          setCurrQuesIndex={setCurrQuesIndex}
          currQuesIndex={currQuesIndex}
          submittedData={submittedData}
          calculateScore={calculateScore}
        />
      </div>
    </div>
  );
};

export default Quiz;
