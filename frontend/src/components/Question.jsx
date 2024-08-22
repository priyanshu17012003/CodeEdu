import React, { useRef } from "react";
import questions from "../store/questions.json";
import { useParams } from "react-router-dom";

const CopyableBox = ({ content, label }) => {
  const textRef = useRef();

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(textRef.current.innerText)
      .then(() => {
        alert("Copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div style={{ marginBottom: "16px" }}>
      <div>
        <strong>{label}</strong>
      </div>
      <pre
        ref={textRef}
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          backgroundColor: "#f9f9f9",
          color: "black",
          whiteSpace: "pre-wrap", // Ensures line breaks are respected.
          wordWrap: "break-word", // Prevents text from overflowing.
        }}
        dangerouslySetInnerHTML={{
          __html: content.replace(/\\n/g, "<br />"),
        }}
      ></pre>
      <button onClick={copyToClipboard} style={{ marginTop: "8px" }}>
        Copy
      </button>
    </div>
  );
};

function Question() {
  const { id } = useParams();
  const question = questions.find((q) => q.id == id);

  // Combine all inputs into one string with a newline separator
  const combinedInputs = question.examples.inputs.join("\\n");

  // Combine all outputs into one string with a newline separator
  const combinedOutputs = question.examples.outputs.join("\\n");

  return (
    <>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-end">
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

                {/* Render all inputs in one CopyableBox */}
                <CopyableBox content={combinedInputs} label="All Inputs" />

                {/* Render all outputs in one CopyableBox */}
                <CopyableBox content={combinedOutputs} label="All Outputs" />

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
