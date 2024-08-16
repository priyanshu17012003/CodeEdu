import React from "react";
import questions from "../store/questions.json";
import { useParams } from "react-router-dom";

function Question() {
  const { id } = useParams();
  const question = questions.find((q) => q.id == id);
  console.log(question);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        alert("Input copied to clipboard!");
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  return (
    <>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-end">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-primary m-4"
          >
            Show the question
          </label>
        </div>

        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <div className="container">
              <h3 className="font-bold mb-2">
                {id} | {question.title}
              </h3>
              <p className="text-sm text-zinc-500 mb-3">
                Difficulty: {question.difficulty}
              </p>
              <hr />
              <div className="mt-3">
                <p className="text-sm text-zinc-500 mb-4">
                  {question.descriptions}
                </p>

                <p className="text-sm text-zinc-500 mb-3">
                  Test Cases: {question.testCases}
                </p>
                <hr />

                <p className="text-sm text-zinc-500 mt-3">Examples:</p>
                <ul className="mb-4">
                  {question.examples.map((example, index) => (
                    <li key={index} className="text-sm text-zinc-500 mt-2">
                      <div className="bg-zinc-100 p-2 rounded">
                        
                        <p className="font-bold">Input:</p>
                        <p
                          className="text-black cursor-pointer select-all"
                          onClick={() => handleCopy(example.input)}
                        >
                          {example.input}
                        </p>
                      </div>

                      <div className="bg-zinc-100 p-2 rounded mt-2">
                        <p className="font-bold">Output:</p>
                        <p className="text-black">{example.output}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <hr />
                <div className="text-sm text-zinc-500 mt-3">
                  <p className="font-bold">Expected Time Complexity:</p>
                  {question.time}
                  <br />
                  <p className="font-bold">Expected Space Complexity:</p>
                  {question.space}
                </div>
                <hr />
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Question;
