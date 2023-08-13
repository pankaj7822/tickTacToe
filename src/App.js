import "./App.css";
import React, { useState } from "react";

function Square({ index, onClick, value }) {
  return (
    <button className="square-button" onClick={() => onClick(index)}>
      {value}
    </button>
  );
}

function Board() {
  const [boardData, setBoardData] = useState(Array(9).fill(null));
  const [user, setUser] = useState("X");
  function onClick(index) {
    console.log("on click called");
    if (boardData[index] !== null) {
      console.log(index);
      alert("Not Allowed");
    } else {
      console.log("else called");
      const updatedArray = [...boardData];
      updatedArray[index] = user;
      console.log(updatedArray);
      setBoardData(updatedArray);
      console.log(boardData);
      if (user === "X") {
        setUser("O");
      } else {
        setUser("X");
      }
      let wonUser = calculateWinner(updatedArray);
      if (wonUser !== null) {
        alert("User " + wonUser + " Won");
      }
    }
  }

  function calculateWinner(boardData) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        boardData[a] &&
        boardData[a] === boardData[b] &&
        boardData[a] === boardData[c]
      ) {
        return boardData[a];
      }
    }
    return null;
  }

  return (
    <div>
      <h1>Current User: {user}</h1>
      <div className="row-container">
        <Square index={0} onClick={onClick} value={boardData[0]} />
        <Square index={1} onClick={onClick} value={boardData[1]} />
        <Square index={2} onClick={onClick} value={boardData[2]} />
      </div>
      <div className="row-container">
        <Square index={3} onClick={onClick} value={boardData[3]} />
        <Square index={4} onClick={onClick} value={boardData[4]} />
        <Square index={5} onClick={onClick} value={boardData[5]} />
      </div>
      <div className="row-container">
        <Square index={6} onClick={onClick} value={boardData[6]} />
        <Square index={7} onClick={onClick} value={boardData[7]} />
        <Square index={8} onClick={onClick} value={boardData[8]} />
      </div>
      <ul>
        <li>Item 1</li>
      </ul>
    </div>
  );
}

function App() {
  return <Board />;
}

export default App;
