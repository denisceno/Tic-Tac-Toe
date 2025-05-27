
const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({onSelectSquare , turns}) {
    let gameBoard = initialBoard;

    for (const turn of turns){
        const { square , player } = turn;
        const { row , col } = square;

        gameBoard[row][col] = player;
    }


//   const [gameBoard, setGameBoard] = useState(initialBoard);

//   function handleSelectedSquare(rowIndex, colindex) {
//     setGameBoard((prevGamebard) => {
//       const updatedBoard = [
//         ...prevGamebard.map((innerArray) => [...innerArray]),
//       ];
//       updatedBoard[rowIndex][colindex] = activePlayerSymbol;
//       return updatedBoard;
//     });
//     onSelectSquare()
//   }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=> onSelectSquare(rowIndex,colIndex)}>{col}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
