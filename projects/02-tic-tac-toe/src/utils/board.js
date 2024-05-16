import confetti from "canvas-confetti";

// Verificar ganador
export const checkWinner = (boardToCheck, turn) => {

  const validateMainDiagonal = () => {
    var validator = new Set();
    let i = 0;

    while (i < boardToCheck.length) {
      validator.add(boardToCheck[i]);
      i += 4;
    }

    return (validator.size == 1 && Array.from(validator)[0] !== null);
  }

  const validateSecondaryDiagonal = () => {
    var validator = new Set();
    let i = 6;

    while (i > 0) {
      validator.add(boardToCheck[i]);
      i -= 2;
    }

    return (validator.size == 1 && Array.from(validator)[0] !== null);
  }

  return (validateMainDiagonal() || validateSecondaryDiagonal()) ? turn : null;

}

// Verificar fin del juego
export const checEndGame = (boardToCheck) => {
  return boardToCheck.every((square) => square !== null);
}

// Confetti Ganador
export const congratulations = () => {
  confetti({ angle: 90, spread: 200, gravity: 1, particleCount: 500, ticks: 600 });
}