import { useState } from 'react';

// function Square() {
//   const [value, setValue] = useState(null);
  
//   function handleClick() {
//     setValue('X');
//   }

//   return <button className="square" onClick={handleClick}>{value}</button>;
// }

// export default function Board() {
//   return (
//     <>
//       <div className="board-row">
//         <Square />
//         <Square />
//         <Square />
//       </div>
//       <div className="board-row">
//         <Square />
//         <Square />
//         <Square />
//       </div>
//       <div className="board-row">
//         <Square />
//         <Square />
//         <Square />
//       </div>
//     </>
//   ); 
// }


// by this point, any clicks will add an X to the square
// we want to 'refactor' it by letting the parent know about the state of the squares
// instead of the squares tracking them individually
// We add this to Board: const [squares, setSquares] = useState(Array(9).fill(null));
// and we remove Square's individual state tracking


// // Initial square refactor
// function Square({value}) {
//   return <button className="square">{value}</button>;
// }

// export default function Board() {
//   const [squares, setSquares] = useState(Array(9).fill(null));

//   // now the value of the squares must be passed and it comes from parent level

//   return (
//     <>
//       <div className="board-row">
//         <Square value={squares[0]} />
//         <Square value={squares[1]} />
//         <Square value={squares[2]} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[3]} />
//         <Square value={squares[4]} />
//         <Square value={squares[5]} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[6]} />
//         <Square value={squares[7]} />
//         <Square value={squares[8]} />
//       </div>
//     </>
//   ); 
// }

// so now, when the square is clicked, the board's 'squares[#]' should change
// we need a way for the square to update the board's state or it's 'squares'
// you cannot update directly from square, rather we will use a function from board to square
// which square calls on click

// function Square({ value, onSquareClick }) {
//   return (
//     <button className="square" onClick={onSquareClick}>
//       {value}
//     </button>
//   );
// }

// export default function Board() {
//   const [squares, setSquares] = useState(Array(9).fill(null));

//   function handleClick() {
//     const nextSquares = squares.slice();
//     nextSquares[0] = "X";
//     setSquares(nextSquares);
//   }

//   return (
//     <>
//       <div className="board-row">
//         <Square value={squares[0]} onSquareClick={handleClick}/>
//         <Square value={squares[1]} onSquareClick={handleClick}/>
//         <Square value={squares[2]} onSquareClick={handleClick}/>
//       </div>
//       <div className="board-row">
//         <Square value={squares[3]} onSquareClick={handleClick}/>
//         <Square value={squares[4]} onSquareClick={handleClick}/>
//         <Square value={squares[5]} onSquareClick={handleClick}/>
//       </div>
//       <div className="board-row">
//         <Square value={squares[6]} onSquareClick={handleClick}/>
//         <Square value={squares[7]} onSquareClick={handleClick}/>
//         <Square value={squares[8]} onSquareClick={handleClick}/>
//       </div>
//     </>
//   ); 
// }


// The problem now, is that the "X" is only coming on the top left box since EVERY square is calling handleClick
// so no matter where I click, handleClick's nextSquares[0] = "X"; will be executed
// I now want (i) to be passed

// function Square({ value, onSquareClick }) {
//   return (
//     <button className="square" onClick={onSquareClick}>
//       {value}
//     </button>
//   );
// }

// export default function Board() {
//   const [squares, setSquares] = useState(Array(9).fill(null));

//   function handleClick(i) {
//     const nextSquares = squares.slice();
//     nextSquares[i] = "X";
//     setSquares(nextSquares);
//   }

//   return (
//     <>
//       <div className="board-row">
//         <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
//         <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
//         <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
//         <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
//         <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
//         <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
//         <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
//       </div>
//     </>
//   ); 
// }

// Next, we must now figure out whose turn it is by adding an is X next boolean? lets call it xIsNext initialized to true

// function Square({ value, onSquareClick }) {
//   return (
//     <button className="square" onClick={onSquareClick}>
//       {value}
//     </button>
//   );
// }

// export default function Board() {
//   const [xIsNext, setXIsNext] = useState(true);
//   const [squares, setSquares] = useState(Array(9).fill(null));

//   // Basically on everyClick, board's xIsNext is flipped
//   function handleClick(i) {
//     // Next problem: you can still change even if a square has value
//     // since it's initialized to null, if it already has value, just return so handleClick will do nothing
//     if (squares[i]) {
//       return;
//     }
//     const nextSquares = squares.slice();
//     if (xIsNext) {
//       nextSquares[i] = "X";
//     } else {
//       nextSquares[i] = "O";
//     }
//     setSquares(nextSquares);
//     setXIsNext(!xIsNext);
//   }

//   return (
//     <>
//       <div className="board-row">
//         <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
//         <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
//         <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
//         <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
//         <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
//         <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
//         <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
//       </div>
//     </>
//   ); 
// }


// // now how do we define the winner?
// // just a function that passes the board's squares
// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     // say lines[i] is [3,4,5]
//     // a = 3
//     // b = 4
//     // c = 5
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }


// New code with calculate winner, but now we have to tell the players someone has already won

// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }

// function Square({ value, onSquareClick }) {
//   return (
//     <button className="square" onClick={onSquareClick}>
//       {value}
//     </button>
//   );
// }


// export default function Board() {
//   const [xIsNext, setXIsNext] = useState(true);
//   const [squares, setSquares] = useState(Array(9).fill(null));
//   const winner = calculateWinner(squares);
//   let status;
//   if (winner) {
//     status = "Winner: " + winner;
//   } else {
//     status = "Next player: " + (xIsNext ? "X" : "O");
//   }

//   function handleClick(i) {
//     // check if calculateWinner returns something, that way, no more clicking after the game is over and there are still empty squares
//     if (squares[i] || calculateWinner(squares)) {
//       return;
//     }
//     const nextSquares = squares.slice();
//     if (xIsNext) {
//       nextSquares[i] = "X";
//     } else {
//       nextSquares[i] = "O";
//     }
//     setSquares(nextSquares);
//     setXIsNext(!xIsNext);
//   }

//   return (
//     <>
//       <div className="status">{status}</div>
//       <div className="board-row">
//         <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
//         <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
//         <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
//         <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
//         <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
//         <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
//         <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
//       </div>
//     </>
//   ); 
// }

// Adding a history, since we create a new set of squares using squares.slice(); and overwrite it
// the idea is to create a top-level component called Game where 'there is a history state'
// export default function Board turns into export default function Game
// and you just include <Board/> as a component

// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }

// function Square({ value, onSquareClick }) {
//   return (
//     <button className="square" onClick={onSquareClick}>
//       {value}
//     </button>
//   );
// }


// function Board() {
//   const [xIsNext, setXIsNext] = useState(true);
//   const [squares, setSquares] = useState(Array(9).fill(null));
//   const winner = calculateWinner(squares);
//   let status;
//   if (winner) {
//     status = "Winner: " + winner;
//   } else {
//     status = "Next player: " + (xIsNext ? "X" : "O");
//   }

//   function handleClick(i) {
//     if (squares[i] || calculateWinner(squares)) {
//       return;
//     }
//     const nextSquares = squares.slice();
//     if (xIsNext) {
//       nextSquares[i] = "X";
//     } else {
//       nextSquares[i] = "O";
//     }
//     setSquares(nextSquares);
//     setXIsNext(!xIsNext);
//   }

//   return (
//     <>
//       <div className="status">{status}</div>
//       <div className="board-row">
//         <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
//         <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
//         <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
//         <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
//         <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
//         <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
//         <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
//       </div>
//     </>
//   ); 
// }

// export default function Game() {
//   return (
//     <>
//       <div className="game">
//       <div className="game-board">
//         <Board />
//       </div>
//       <div className="game-info">
//         <ol>{/*TODO*/}</ol>
//       </div>
//     </div>
//     </>
//   ); 
// }

// everything is working totally fine, but now, it makes sense to move xIsNext to the top-level
// Board becomes a snapshot basically, so that we can come back to it later

// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }

// function Square({ value, onSquareClick }) {
//   return (
//     <button className="square" onClick={onSquareClick}>
//       {value}
//     </button>
//   );
// }


// function Board({ xIsNext, squares, onPlay }) {
//   // These two are no longer needed, since Board is passed from history which comes from Game
//   // const [xIsNext, setXIsNext] = useState(true);
//   // const [squares, setSquares] = useState(Array(9).fill(null));

//   const winner = calculateWinner(squares);
//   let status;
//   if (winner) {
//     status = "Winner: " + winner;
//   } else {
//     status = "Next player: " + (xIsNext ? "X" : "O");
//   }

//   function handleClick(i) {
//     if (squares[i] || calculateWinner(squares)) {
//       return;
//     }
//     const nextSquares = squares.slice();
//     if (xIsNext) {
//       nextSquares[i] = "X";
//     } else {
//       nextSquares[i] = "O";
//     }
//     // setSquares(nextSquares);
//     // setXIsNext(!xIsNext);
//     // Replace by calling onPlay instead, onPlay will essentially do the setting of this board into the history
//     // as well as flipping xIsNext
//     onPlay(nextSquares);
//   }

//   return (
//     <>
//       <div className="status">{status}</div>
//       <div className="board-row">
//         <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
//         <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
//         <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
//         <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
//         <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
//         <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
//         <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
//       </div>
//     </>
//   ); 
// }

// export default function Game() {
//   const [xIsNext, setXIsNext] = useState(true);
//   const [history, setHistory] = useState([Array(9).fill(null)]);
//   // history is basically an array of squares() so [squares]
//   const currentSquares = history[history.length - 1];
//   // and currentSquares takes the most recent thing you placed in history

//   function handlePlay(nextSquares) {
//     // ... => spreadSyntax a.k.a. 'enumerate all items in history'
//     // basically appends it 
//     setHistory([...history, nextSquares]);
//     setXIsNext(!xIsNext);
//   }

//   return (
//     <>
//       <div className="game">
//       <div className="game-board">
//         <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
//         {/* Remember to change the Board component */}
//       </div>
//       <div className="game-info">
//         <ol>{/*TODO*/}</ol>
//       </div>
//     </div>
//     </>
//   ); 
// }


// Game now still fully works, we now want to timetravel to a certain history (board snapshot)
// You already have an array of history moves in state, so now you need to transform it to an array of React elements.\
// In JavaScript, to transform one array into another, you can use the array map method:

// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }

// function Square({ value, onSquareClick }) {
//   return (
//     <button className="square" onClick={onSquareClick}>
//       {value}
//     </button>
//   );
// }


// function Board({ xIsNext, squares, onPlay }) {
//   const winner = calculateWinner(squares);
//   let status;
//   if (winner) {
//     status = "Winner: " + winner;
//   } else {
//     status = "Next player: " + (xIsNext ? "X" : "O");
//   }

//   function handleClick(i) {
//     if (squares[i] || calculateWinner(squares)) {
//       return;
//     }
//     const nextSquares = squares.slice();
//     if (xIsNext) {
//       nextSquares[i] = "X";
//     } else {
//       nextSquares[i] = "O";
//     }
//     onPlay(nextSquares);
//   }

//   return (
//     <>
//       <div className="status">{status}</div>
//       <div className="board-row">
//         <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
//         <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
//         <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
//         <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
//         <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
//         <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
//         <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
//       </div>
//     </>
//   ); 
// }

// export default function Game() {
//   const [xIsNext, setXIsNext] = useState(true);
//   const [history, setHistory] = useState([Array(9).fill(null)]);
//   // currentMove is just the moveCount technically since it starts at 0
//   const [currentMove, setCurrentMove] = useState(0);
//   const currentSquares = history[history.length - 1];

//   function handlePlay(nextSquares) {
//     setHistory([...history, nextSquares]);
//     setXIsNext(!xIsNext);
//   }

//   // Whenever you jump, you have to set the currentMove basically to whatever move that was
//   // So moving back to move 1 sets current move to 1
//   // and setX is determined via modulo. 0 remainder = x; 1 remainder = 1

//   function jumpTo(nextMove) {
//     setCurrentMove(nextMove);
//     setXIsNext(nextMove % 2 === 0);
//   }

//   // make a button for every element in squares
//   // const moves makes an Array of React elements, a list of components
//   // so in the main return {moves is enough}
//   // history.map() -> loop through all elements in history
//   // history.map((squares, move) => ()) -> each element is squares a.k.a. Array(9).fill(null) and move is index of squares
//   const moves = history.map((squares, move) => {
//     let description;
//     if (move > 0) {
//       description = 'Go to move #' + move;
//     } else {
//       description = 'Go to game start';
//     }
//     return (
//       // the key is the move number
//       // If the current list has a key that didn’t exist before, React creates a component.
//       // If the current list is missing a key that existed in the previous list, React destroys the previous component.
//       // If two keys match, the corresponding component is moved.
//       <li key={move}>
//         <button onClick={() => jumpTo(move)}>{description}</button>
//       </li>
//     );
//   });

//   return (
//     <>
//       <div className="game">
//       <div className="game-board">
//         <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
//       </div>
//       <div className="game-info">
//         <ol>{moves}</ol>
//       </div>
//     </div>
//     </>
//   ); 
// }


// Okay, but at this point, the board state DOES NOT change
// it, however, tracks your current move, so that clicking on a button 
// will make you jump to whichever X or O should be inputted on that move
// when we jump to move 1, it should go back to the state of supposed move 1


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}


function Board({ xIsNext, squares, onPlay }) {
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  ); 
}

export default function Game() {
  // as final cleanup, we move xIsNext to game state, since its determinable by move
  // const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  // currentSquares should come from the history[what move you are doing]
  // that way the board state changes
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  // Now instead of just tracking whoevers move it was at that move #
  // you basically want to UNDO the history
  // so saw move 2, 3, 4, 5 was already done. and you jump to move 1
  // move 2,3,4,5 should be nulled  
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    // as final cleanup, we move xIsNext to game state, since its determinable by move
    // setXIsNext(!xIsNext);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    // as final cleanup, we move xIsNext to game state, since its determinable by move
    // setXIsNext(nextMove % 2 === 0);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <>
      <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
    </>
  ); 
}
