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

  const validateRows = () => {
    let isEquals = false;

    for (let i = 0; i < boardToCheck.length; i += 3) {
      let row = boardToCheck.slice(i, i + 3);
      let validator = new Set(row);
      if (validator.size == 1 && Array.from(validator)[0] != null) {
        isEquals = true;
        break;
      }
    }

    return isEquals;
  }

  const validateColumns = () => {
    let isEquals = false;
    let length = 3;

    for (let j = 0; j < length; j++) {
      var validator = new Set();

      for (let i = j; i < boardToCheck.length; i += 3) {
        validator.add(boardToCheck[i]);
      }

      if (validator.size == 1 && Array.from(validator)[0] != null) {
        isEquals = true;
        break;
      }
    }

    return isEquals;
  }

  return (validateMainDiagonal() || validateSecondaryDiagonal() || validateRows() || validateColumns()) ? turn : null;

}

// Verificar fin del juego
export const checkEndGame = (boardToCheck) => {

  return boardToCheck.every((square) => square !== null);

}

// Confetti Ganador
export const congratulations = () => {

  confetti({ angle: 90, spread: 200, gravity: 1, particleCount: 500, ticks: 600 });

}