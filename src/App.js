import React, { useState } from "react";
import "./App.css";
import { tableData } from "./tableData";

const INITIAL_OFFSET = 0;
const FINAL_OFFSET = 2;
const TABLE_SIZE = 3;

function App() {
  const [initialOffset, setInitialOffset] = useState(INITIAL_OFFSET);
  const [finalOffset, setFinalOffset] = useState(FINAL_OFFSET);

  const updateOffset = (pageNum) => {
    setInitialOffset(INITIAL_OFFSET + TABLE_SIZE * (pageNum - 1));
    setFinalOffset(FINAL_OFFSET + TABLE_SIZE * (pageNum - 1));
  };

  return (
    <div>
      <div className="tableAlign">
        <table>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th> Profession</th>
          </tr>
          {tableData.map((data, index) => {
            if (index >= initialOffset && index <= finalOffset) {
              return (
                <tr>
                  <td>{data.id}</td>
                  <td> {data.name}</td>
                  <td>{data.profession}</td>
                </tr>
              );
            }
          })}
        </table>
      </div>
      <div className="buttonStyle">
        <button onClick={() => updateOffset(1)}>1</button>
        <button onClick={() => updateOffset(2)}>2</button>
        <button onClick={() => updateOffset(3)}>3</button>
      </div>
    </div>
  );
}

export default App;
