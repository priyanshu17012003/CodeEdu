import React from "react";
import questions from "../store/questions.json";
import { useNavigate } from "react-router-dom";

function List() {

  const navigate = useNavigate();

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Solve</th>
            </tr>
          </thead>
          <tbody>
            {
              questions.map((question) => {
                return (
                  <tr key={question.id}>
                    <th>{question.id}</th>
                    <td>{question.title}</td>
                    <td><button className="btn btn-primary bg-blue-600 text-white hover:bg-white hover:text-blue-600" onClick={() => {navigate(`/question/${question.id}`)}}>Solve</button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  );
}

export default List;
