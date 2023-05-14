import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPercentage } from "react-icons/fa";
import { BsPatchQuestion } from "react-icons/bs";
import { AiOutlineFieldTime } from "react-icons/ai";
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto mt-12 px-8 py-8 md:shadow-md rounded-md">
      <div className="flex flex-col items-center ">
        <h1 className="text-4xl font-bold uppercase ">Welcome</h1>
        <h1 className="text-xl uppercase">to</h1>
        <h2 className="text-2xl uppercase text-blue-500 font-bold">
          The Daily reactjs quiz
        </h2>
      </div>
      <div className="mt-2 py-4">
        <h1 className="text-xl font-bold">Abou the quiz</h1>
        <p className="text-gray-500 text-lg">
          The ReactJS quiz is an engaging assessment that tests your knowledge
          of the popular JavaScript library for building user interfaces.
        </p>
        <h1 className="text-lg font-bold mt-2">This Quiz Includes</h1>
        <ul className="text-lg py-2">
          <li className="flex items-center ">
            <span>
              <FaPercentage />
            </span>
            50% Passing Percentage
          </li>
          <li className="flex items-center">
            <BsPatchQuestion /> 5 Questions
          </li>
          <li className="flex items-center">
            <AiOutlineFieldTime />
            150 sec
          </li>
        </ul>
      </div>
      <button
        className="bg-blue-500 py-1 px-7 uppercase text-white text-lg  rounded-lg"
        onClick={() => navigate("/quize")}
      >
        start
      </button>
    </div>
  );
};

export default Home;
