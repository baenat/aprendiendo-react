import './App.css';

import { useState } from 'react';
import { TURNS } from './constants/constants';
import { Square } from './components/Square';
import { WinnerModal } from './components/WinnerModal';
import { checkEndGame, checkWinner, congratulations } from './utils/board';
import { getItemFromStorage, resetGameStorage, saveGameToStorage } from './utils/storage';

function App() {

  const [board, setBoard] = useState(() => {
    const boardFromStorage = getItemFromStorage('board');
    return (boardFromStorage) ? JSON.parse(boardFromStorage) : Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = getItemFromStorage('turn');
    return turnFromStorage ?? TURNS.X;
  });

  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {

    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    // LocalStorage
    saveGameToStorage(
      {
        board: newBoard,
        turn: newTurn
      }
    );

    const newWinner = checkWinner(newBoard, turn);

    if (newWinner) {
      congratulations();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    resetGameStorage();
  }

  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}> {TURNS.X} </Square>
        <Square isSelected={turn === TURNS.O}> {TURNS.O} </Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}

export default App;
