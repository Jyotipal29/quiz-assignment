import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { data } from "../data";
const Score = () => {
  const { state } = useLocation();
  console.log(state, "state");
  const navigate = useNavigate();
  return (
    <div className="container mx-auto  px-8 py-4 md:mt-8  space-y-2 md:shadow-md rounded-md">
      <h2 className="text-center uppercase text-3xl font-bold">
        Congratulations
      </h2>
      <p className="text-center text-2xl text-blue-500">
        Your score : {state.score}
      </p>
      <div className="space-y-2 py-4">
        {data.map((it, index) => (
          <>
            <p className="text-xl">
              Question {index + 1} :{it.question}
            </p>
            <p
              style={{
                color:
                  it.answer === state.submittedData[index] ? "green" : "red",
              }}
            >
              {state.submittedData[index]
                ? ` Your Answer :${state.submittedData[index]}`
                : "not answered"}
            </p>
          </>
        ))}
      </div>
      <button
        className="bg-blue-500 py-1 px-7 uppercase text-white text-lg  rounded-lg"
        onClick={() => navigate("/")}
      >
        home
      </button>
    </div>
  );
};

export default Score;
